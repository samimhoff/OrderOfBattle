import React, {useState, useEffect, createContext} from 'react';
import { IndividualRole } from '../../../viewmodels/units/role'; 
import { Nations } from '../../../viewmodels/countries/nations';
import { Leadership } from '../../../viewmodels/units/role';
import { Rank } from '../../../viewmodels/units/rank';
import { GetWeapons } from '../../weapons/GetWeapons';

export const AddAnIndividual = (props: any) => {
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [rank, setRank] = useState("Private");
    const [description, setDescription] = useState();
    const [leadership, setLeadership] = useState();
    const [weapon, setWeapon] = useState("Select a weapon below");
    const [weaponId, setWeaponId] = useState(0);
    
    const postIndividual = async (e: any) => {
        let nation = props.nation;
        let unitId = props.unitId
        let rank_index = Rank[rank].hierarchy;
        let body = {
            generic_name: name,
            role: role,
            nation: nation,
            leadership: leadership,
            rank: rank,
            rank_index: rank_index,
            description: description,
            weaponId: weaponId,
            unitId: unitId
        }
        try {
            const response = await fetch("http://localhost:5000/individuals/", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            props.getNewIndividual();   
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const createRoleSelection = (): any[] => {
        let rolesArray = [];
        for (const key in IndividualRole) {
          rolesArray.push(<option value={IndividualRole[key].name}>{IndividualRole[key].name}</option>)
        }
        return rolesArray;
    }

    const createRankSelection = (): any[] => {
        let ranksArray = [];
        for (const key in Rank) {
            ranksArray.push(<option value={Rank[key].name}>{Rank[key].name}</option>)
        }
        return ranksArray;
    }

    const createLeadershipSelection = (): any[] => {
        let leadershipArray = [];
        for (const key in Leadership) {
            leadershipArray.push(<option value={Leadership[key].name}>{Leadership[key].name}</option>)
        }
        return leadershipArray;
    }

    const retrieveWeapon = (id: any, name: any) => {
        setWeaponId(id);
        setWeapon(name);
    }

    const changeName = (event: any) => {
        setName(event.target.value);
    }

    const changeDescription = (event: any) => {
        setDescription(event.target.value);
    }

    const changeRole = (event: any) => {
        setRole(event.target.value)
    }

    const changeLeadership = (event: any) => {
        setLeadership(event.target.value)
    }

    const changeRank = (event: any) => {
        setRank(event.target.value)
    }

    return (
        <div>
            <hr className="mt-3"/>
            <form className="mt-3">
                <div className="form-row">
                        <input type="text" className="underline-input mx-auto m3" style={{width: "300px"}} placeholder="e.g. Squad Leader or Private Ryan" onChange={changeName}/>
                </div>
                <div className="form-row mt-5">
                    <div className="form-group col-md-4">
                        <label className="pr-2">Role:</label>
                        <select className="form-control w-75 d-inline" value={role} onChange={changeRole}>
                            {createRoleSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="pr-2">Rank:</label>
                        <select className="form-control w-75 d-inline" value={rank} onChange={changeRank}>
                            {createRankSelection()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="pr-2">Leadership:</label>
                        <select className="form-control w-75 d-inline" value={leadership} onChange={changeLeadership}>
                            {createLeadershipSelection()}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-3">
                        <label>Equipped Weapon:</label>
                        <input type="text" className="form-control" value={weapon} readOnly></input>
                    </div>
                    <div className="col-md-9">
                        <label>Soldier Description:</label>
                        <div></div>
                        <textarea style={{width: "100%"}} value={description} onChange={changeDescription}></textarea>
                    </div>
                </div>
            </form>
            <h5 className="text-center mb-3">Equip Soldier with Weapon</h5>
            <GetWeapons retrieveWeapon={retrieveWeapon}/>
            <div className="text-center">
                <button onClick={postIndividual} className="btn btn-success m-3">Submit</button>
                <button onClick={() => props.setIsAddingIndividual(false)} className="btn btn-danger">Cancel</button>
            </div>
        </div>
    )
}