import React, {useState, useEffect} from 'react';
import { SideBarItem } from './SideBarItem';


export const SideBar = () => {
    const [units, setUnits] = useState()

    useEffect(() => {
        getAllUnits();
    }, [])

    const getAllUnits = async () => {
        try {
            const response = await fetch("http://localhost:5000/units/");
            const jsonData = await response.json();
            if (jsonData != 'no response') {
                createUnitItems(jsonData);
                return jsonData;
            }
        } catch (error: any) {
            console.error(error.message);
        }
    } 

    const createUnitItems = (data: any) => {

    }

    return (
        <div className='sidebar'>
            <SideBarItem />

        </div>
    )
    //ONLY have to focus on the menu and the id. Not anything else. 
}