import React, {useState, useEffect, createContext} from 'react';
import { Nations } from '../../../viewmodels/countries/nations';
import { TheatersEnum } from '../../../viewmodels/countries/theaters';
import { Rank } from '../../../viewmodels/units/rank';
import { Size } from '../../../viewmodels/units/size';
import { Mobility } from '../../../viewmodels/units/mobility';
import { Role } from '../../../viewmodels/units/role';
import { Specialization } from '../../../viewmodels/units/specialization';



export const AddUnit = () => {
    const [isSpecific, setIsSpecific] = useState(false);   
    const [name, setName] = useState("");
    const [nation, setNation] = useState("Soviet Union");
    const [theater, setTheater] = useState("Pacific");
    const [size, setSize] = useState("Fireteam");
    const [mobility, setMobility] = useState("Infantry");
    const [role, setRole] = useState("Standard")
    const [specialization, setSpecialization] = useState("USMC");
    const [date, setDate] = useState("1931-01-01");
    const [description, setDescription] = useState("");
    const [soldiers, setSoldiers] = useState([]);

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
            theaterArray.push(<option value={type}>{type}</option>)
        });
        return theaterArray;
    }

    const createNationSelection = (): any[] => {
        let nationsArray = [];
        for (const key in Nations) {
          nationsArray.push(<option value={Nations[key].name}>{Nations[key].name}</option>)
        }
        return nationsArray;
    }

    const createSizeSelection = (): any => {
        let sizeArray: any = [];
        for (const key in Size) {
            sizeArray.push(<option value={Size[key].name}>{Size[key].name}</option>)
        }
        return sizeArray;
    }

    const createMobilitySelection = (): any => {
        let mobilityArray: any = [];
        for (const key in Mobility) {
            mobilityArray.push(<option value={Mobility[key].name}>{Mobility[key].name}</option>)
        }
        return mobilityArray;
    }

    const createSpecializationSelection = (): any => {
        let specializationArray: any = [];
        for (const key in Specialization) {
            specializationArray.push(<option value={Specialization[key].name}>{Specialization[key].name}</option>)
        }
        return specializationArray;
    }

    const createRoleSelection = (): any => {
        let roleArray: any = [];
        for (const key in Role) {
            roleArray.push(<option value={Role[key].name}>{Role[key].name}</option>)
        }
        return roleArray;
    }

    
    return (
        <>
        <div className="container mt-5">
            <h3 className="text-center">Add a Unit</h3>
        </div>
        <div className="container mt-3">
            <form className="">
                <div className="form-row">
                    <div className="form-group col-md-6" style={{margin: "0 auto", width: "40%"}}>
                        <label style={{textAlign: "center"}}>Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={changeName}></input>
                    </div> 
                </div>
                <div className="form-row mt-1">
                    <div className="form-group col-md-4">
                        <label>National Origin</label>
                        <select className="form-control" value={nation} onChange={changeNationSelection}>
                            {createNationSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Theater</label>
                        <select className="form-control" value={theater} onChange={changeTheaterSelection}>
                            {createTheaterSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Size</label>
                        <select className="form-control" value={size} onChange={changeSizeSelection}>
                            {createSizeSelection()}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Mobility</label>
                        <select className="form-control" value={mobility} onChange={changeMobilitySelection}>
                            {createMobilitySelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Role</label>
                        <select className="form-control" value={role} onChange={changeRoleSelection}>
                            {createRoleSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Specialization</label>
                        <select className="form-control" value={specialization} onChange={changeSpecializationSelection}>
                            {createSpecializationSelection()}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Date First Enlisted:</label>
                        <input type="date" className="form-control" min="1886-01-011886-01-01" max="1945-12-31" value={date} onChange={changeDate}></input> 
                    </div>
                    <div className="form-group col-md-8">
                        <label style={{textAlign: "center"}}>Description:</label>
                        <div></div>
                        <textarea style={{width: "100%"}} value={description} onChange={changeDescription}></textarea>
                    </div>
                </div>
            </form>
            <hr />
            <div className="container mt-3">
                <h4 className="text-center">Add Soldiers</h4>
            </div>
        </div>
        
        </>
    )
}