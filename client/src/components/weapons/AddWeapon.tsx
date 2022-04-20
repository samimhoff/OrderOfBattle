import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

import { Nations } from '../../viewmodels/countries/nations';
import { WeaponTypes } from '../../viewmodels/weapons/weaponTypes';
import { Action } from '../../viewmodels/weapons/action';

export const AddWeapon = (props: any) => {
  const [name, setName] = useState("Mosin Nagant M91/31");
  const [nation, setNation] = useState("Soviet Union");
  const [weaponType, setWeaponType] = useState("Rifle");
  const [action, setAction] = useState("Manual");
  const [caliber, setCaliber] = useState("7.62x53R");
  const [range, setRange] = useState(450);
  const [rate, setRate] = useState(10);
  const [weight, setWeight] = useState(9);
  const [capacity, setCapacity] = useState(5);
  const [date, setDate] = useState("1931-01-01")
  const [crew, setCrew] = useState("FALSE");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  //For editing an existing weapon
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (props.weaponId !== null) {
      setEditingId(props.weaponId);
      setEditWeaponState(props.weaponId);
    }
  }, [props.weaponId])

  const formatIncomingDate = (date: any) => {
    let formatted = date.split('').splice(0,10).join('');
    return formatted;
  }

  const setEditWeaponState = async (id: any) => {
    try {
      let url = "http://localhost:5000/weapons/" + id;
      const response = await fetch(url);
      const data = await response.json();
      setName(data.name);
      setNation(data.nationoforigin);
      setWeaponType(data.weapontype);
      setAction(data.action);
      setCaliber(data.caliber);
      setRange(data.effectiverange)
      setRate(data.rateoffire);
      setWeight(data.weight);
      setCapacity(data.capacity);
      setDate(formatIncomingDate(data.date));
      setCrew(data.crewserved === false ? "FALSE" : "TRUE");
      setDescription(data.description);
      setPhoto(data.photo);
    } catch (error) {
        console.error(error);
    }
  }

  const cancelEdit = () => {
    setName("Mosin Nagant M91/31")
    setNation("Soviet Union")
    setWeaponType("Rifle");
    setAction("Manual");
    setCaliber("7.62x53R");
    setRange(450);
    setRate(10);
    setWeight(9);
    setCapacity(5);
    setDate("1931-01-01");
    setCrew("FALSE");
    setDescription("");
    setPhoto("");
    setEditingId(null);
  }

  const postWeaponToDb = () => {
    let body = {
      name: name,
      action: action,
      caliber: caliber,
      nationOfOrigin: nation,
      effectiveRange: range,
      rateOfFire: rate,
      weight: weight,
      capacity: capacity,
      date: date,
      description: description,
      weaponType: weaponType,
      crewServed: crew,
      photo: photo
    }
    try {
      const response = fetch("http://localhost:5000/weapons", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
    } catch (err: any) {
      console.error(err.message);
    }
  } 

  const changeName = (event: any) => {
    setName(event.target.value);
  }

  const changeCaliber = (event: any) => {
    setCaliber(event.target.value);
  }


  const createNationSelection = (): any[] => {
    let nationsArray = [];
    for (const key in Nations) {
      nationsArray.push(<option key={key} value={Nations[key].name}>{Nations[key].name}</option>)
    }
    return nationsArray;
  }

  const changeNationSelection = (event: any) => {
    setNation(event.target.value)
  }

  const createWeaponTypeSelection = (): any[] => {
    let weaponTypeArray: any = [];
    Object.values(WeaponTypes).forEach((type) =>  {
      weaponTypeArray.push(<option value={type}>{type}</option>)
    });
    return weaponTypeArray;
  }

  const changeWeaponType = (event: any) => {
    setWeaponType(event.target.value)
  }

  const createAction = () => {
    let actions = ["Manual", "Semi-automatic", "Automatic"];
    let actionsArray: any = [];
    Object.values(actions).forEach((action) =>  {
      actionsArray.push(<option key={action} value={action}>{action}</option>)
    });
    return actionsArray;
  }

  const changeAction= (event: any) => {
    setAction(event.target.value)
  }

  const changeRange = (event: any) => {
    let initialRange = event.target.value
    setRange(initialRange);
  }

  const changeRate = (event: any) => {
    setRate(event.target.value);
  }

  const changeWeight = (event: any) => {
    setWeight(event.target.value);
  }

  const changeCapacity = (event: any) => {
    setCapacity(event.target.value);
  }
  
  const changeDescription = (event: any) => {
    setDescription(event.target.value);
  }

  const changeDate = (event: any) => {
    setDate(event.target.value);
  }

  const changePhoto = (event: any) => {
    setPhoto(event.target.value);
  }

  


    return (
      <>
      {editingId ? 
        <div>
          <div className="form-row" style={{margin: "0 auto"}}>
            <div className="col-md-4"></div>
            <h4 className="form-group">Editing Weapon: {name} &nbsp; </h4>
            <button className="btn btn-outline-danger p-1" style={{height: "34px"}} onClick={cancelEdit}>
              Cancel
            </button>
          </div>   
        </div> : 
        <h4 style={{ textAlign: "center" }}>Add a weapon to the index below</h4>
      }
      <form className="mt-5">
        <div className="form-row ">
          <div className="form-group col-md-6" style={{margin: "0 auto", width: "40%"}}>
            <label style={{textAlign: "center"}}>Name:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={changeName}></input>
          </div>
          <div className="form-group col-md-6">
            <label style={{textAlign: "center"}}>Photo Url:</label>
            <input type="text" className="form-control" id="photo" value={photo} onChange={changePhoto}></input>
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-6">
            <label>National Origin</label>
            <select className="form-control" value={nation} onChange={changeNationSelection}>
              {createNationSelection()}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Weapon Type</label>
            <select className="form-control" value={weaponType} onChange={changeWeaponType}>
              {createWeaponTypeSelection()}
            </select>
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-6">
            <label>Action</label>
            <select className="form-control" value={action} onChange={changeAction}>
              {createAction()}
            </select>   
          </div>
          <div className="form-group col-md-6">
            <label>Caliber</label>
            <input type="text" className="form-control" id="caliber" value={caliber} onChange={changeCaliber}></input>
          </div>
        </div>
        <div className="form-group">
          <label>Maximum Effective Range: {range} meters</label>
          <input type="range" className="form-control-range" id="range" min="0" max="1100" value={range} onChange={changeRange}></input>
        </div>
        <div className="form-group">
          <label>Rate of Fire: {rate} round per minute</label>
          <input type="range" className="form-control-range" id="rate" min="0" max="1500" value={rate} onChange={changeRate}></input>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-6">
            <label>Weight in pounds:</label>
            <input type="number" className="form-control" id="weight" value={weight} onChange={changeWeight}></input> 
          </div>
          <div className="form-group col-md-6">
            <label>Capacity per magazine:</label>
            <input type="number" className="form-control" id="capacity" value={capacity} onChange={changeCapacity}></input>
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-6">
            <label>Date of first issue:</label>
            <input type="date" className="form-control" id="caliber" min="1886-01-011886-01-01" max="1945-12-31" value={date} onChange={changeDate}></input> 
          </div>
          <div className="form-group col-md-6" style={{width: "50%", margin: "0 auto", textAlign:"center"}}>
            <div><label>Crew served?</label></div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="crew" id="crew1" value="false" onClick={() => {setCrew("FALSE")}}></input>
              <label className="form-check-label">
                No
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="crew" id="crew2" value="true" onClick={() => {setCrew("TRUE")}}></input>
              <label className="form-check-label">
                Yes
              </label>
            </div>
          </div>
        </div>
        <div className="form-group" style={{margin: "0 auto", width: "60%"}}>
          <label style={{textAlign: "center"}}>Description:</label>
          <div></div>
          <textarea style={{width: "100%"}} value={description} onChange={changeDescription}></textarea>
        </div>
        <button className="btn btn-primary pull-right" onClick={postWeaponToDb}>Submit</button>
      </form>
    </>
    )
}