import React, {useState, useEffect, createContext} from 'react';
import { AddWeapon } from './AddWeapon';
import { GetWeapons } from './GetWeapons';

export const Weapons = () => {

    const [editWeapon, setEditWeapon] = useState(null);
    
    const changeWeaponId = (id: any, name: any) => {
        setEditWeapon(id);
    }

    return (
        
        <div>
            <br />
            <h2 style={{ textAlign: "center" }} className="mb-3 mt-3">View Weapons</h2>
            <div className='justify-content-center' style={{width: "90%", textAlign: "center", position: "relative", margin: '0 auto'}}>
                <GetWeapons retrieveWeapon={changeWeaponId}/>
            </div>
            <h2 style={{ textAlign: "center" }} className="mb-3 mt-3">Weapon Interface</h2>
            <br />
            <div className="container mb-5">
                <AddWeapon weaponId={editWeapon}/>
            </div>
        </div>
    )
}