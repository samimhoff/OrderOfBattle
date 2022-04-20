import React, {useState, useEffect } from 'react';
import { Nations } from '../../viewmodels/countries/nations';
import { TheatersEnum } from '../../viewmodels/countries/theaters';
import { Size } from '../../viewmodels/units/size';
import { ISize } from '../../viewmodels/units/size';
import { Mobility } from '../../viewmodels/units/mobility';
import { Role } from '../../viewmodels/units/role';
import { Specialization } from '../../viewmodels/units/specialization';
import { AddIndividuals } from './individual/AddIndividuals';

enum editingStatus {
    creating,
    editing,
    readonly
}

export const AddUnit = () => {
    const [isSpecific, setIsSpecific] = useState(false);   
    const [unitId, setUnitId] = useState(0);
    const [name, setName] = useState("");
    const [nation, setNation] = useState("France");
    const [theater, setTheater] = useState("Pacific");
    const [size, setSize] = useState("Fireteam");
    const [mobility, setMobility] = useState("Infantry");
    const [role, setRole] = useState("Standard")
    const [specialization, setSpecialization] = useState("USMC");
    const [date, setDate] = useState("1931-01-01");
    const [description, setDescription] = useState("");
    // const [readOnly, setReadOnly] = useState(false);
    const [status, setStatus] = useState(editingStatus.creating);
 
    const postUnitToDB = async (e: any) => {
        e.preventDefault();
        let sizeIndex = Size[size].hierarchy;
        let body = {
            generic_name: name,
            nation: nation,
            theater: theater,
            size: size,
            size_index: sizeIndex,
            mobility: mobility,
            role: role,
            specialization: specialization,
            date: date,
            description: description
        }
        try {
            await fetch("http://localhost:5000/units", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then((response: any) => {
                return response.json();
            }).then((data) => {
                setUnitId(data.unit_id);
                setStatus(editingStatus.readonly);
            });
        } catch (error: any) {
            console.error(error.message);
        }
    }


    const changeName = (event: any) => {
        setName(event.target.value)
    }

    const changeTheaterSelection = (event: any) => {
        setTheater(event.target.value);
    }

    const changeSizeSelection = (event: any) => {
        setSize(event.target.value);
    }

    const changeNationSelection = (event: any) => {
        setNation(event.target.value)
    }
    
    const changeMobilitySelection = (event: any) => {
        setMobility(event.target.value);
    }

    const changeSpecializationSelection = (event: any) => {
        setSpecialization(event.target.value)
    }

    const changeRoleSelection = (event: any) => {
        setRole(event.target.value)
    }

    const changeDate = (event: any) => {
        setDate(event.target.value)
    }
    
    const changeDescription = (event: any) => {
        setDescription(event.target.value)
    }

    const createTheaterSelection = (): any[] => {
        let theaterArray: any = [];
        Object.values(TheatersEnum).forEach((type) =>  {
            theaterArray.push(<option key={type} value={type}>{type}</option>)
        });
        return theaterArray;
    }

    const createNationSelection = (): any[] => {
        let nationsArray = [];
        for (const key in Nations) {
          nationsArray.push(<option key={key} value={Nations[key].name}>{Nations[key].name}</option>)
        }
        return nationsArray;
    }

    const createSizeSelection = (): any => {
        let sizeArray: any = [];
        let i = 0;
        for (const key in Size) {
            i++;
            sizeArray.push(<option key={key + i} value={Size[key].name}>{Size[key].name}</option>)
        }
        return sizeArray;
    }

    const createMobilitySelection = (): any => {
        let mobilityArray: any = [];
        for (const key in Mobility) {
            mobilityArray.push(<option key={key} value={Mobility[key].name}>{Mobility[key].name}</option>)
        }
        return mobilityArray;
    }

    const createSpecializationSelection = (): any => {
        let specializationArray: any = [];
        for (const key in Specialization) {
            specializationArray.push(<option key={key} value={Specialization[key].name}>{Specialization[key].name}</option>)
        }
        return specializationArray;
    }

    const createRoleSelection = (): any => {
        let roleArray: any = [];
        for (const key in Role) {
            roleArray.push(<option key={key} value={Role[key].name}>{Role[key].name}</option>)
        }
        return roleArray;
    }

    const changeStatus = (e: any) => {
        e.preventDefault();
        setStatus(editingStatus.editing);
    }

    const generateTitle = () => {
        if (status === editingStatus.creating) {
            return <h5 style={{display: 'inline-block', fontSize: "18px", fontWeight: "normal"}}>Creating Unit:</h5>
        } else if (status === editingStatus.editing) {
            return <h5 style={{display: 'inline-block', fontSize: "18px", fontWeight: "normal"}}>Editing Unit:</h5>
        } else {
            return <h5 style={{display: 'inline-block', fontSize: "18px", fontWeight: "normal"}}>Adding Personelle, Weapons, etc. to Unit:</h5>
        }
    }
    
    return (
        <>
        <div className="container mt-4">
        </div>
        <div className="container mt-3">
            <form className="">
                <div className="text-center">
                        {generateTitle()}
                        <input readOnly={status === editingStatus.readonly} type="text" className="underline-input" style={{width: "300px"}} placeholder="Unit Name Here"/>
                </div>
                <div className="form-row mt-3">
                    <div className="form-group col-md-4">
                        <label>National Origin</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={nation} onChange={changeNationSelection}>
                            {createNationSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Theater</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={theater} onChange={changeTheaterSelection}>
                            {createTheaterSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Size</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={size} onChange={changeSizeSelection}>
                            {createSizeSelection()}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Mobility</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={mobility} onChange={changeMobilitySelection}>
                            {createMobilitySelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Role</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={role} onChange={changeRoleSelection}>
                            {createRoleSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Specialization</label>
                        <select disabled={status === editingStatus.readonly} className="form-control" value={specialization} onChange={changeSpecializationSelection}>
                            {createSpecializationSelection()}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Date First Enlisted:</label>
                        <input readOnly={status === editingStatus.readonly} type="date" className="form-control" min="1886-01-011886-01-01" max="1945-12-31" value={date} onChange={changeDate}></input> 
                    </div>
                    <div className="form-group col-md-8">
                        <label style={{textAlign: "center"}}>Description:</label>
                        <div></div>
                        <textarea readOnly={status === editingStatus.readonly} style={{width: "100%"}} value={description} onChange={changeDescription}></textarea>
                    </div>
                </div>
                <div className="text-center">
                    {status === editingStatus.creating ? 
                        <button className="btn btn-success" onClick={postUnitToDB}>Submit</button>
                        :
                        <button className="btn btn-danger" onClick={changeStatus}>Edit</button>
                    }
                </div>
            </form>
            <hr />
            {unitId ? 
                <AddIndividuals nation={nation} unitId={unitId}/>
                :
                <div className="d-flex">
                    <i className="bi bi-exclamation-lg"></i>
                    <p className="help-text">To add weapons, vehicles, and equipment to your unit, first create and submit one.</p>
                </div>
            }
        </div>
        {/*      */}
        </>
    )
}