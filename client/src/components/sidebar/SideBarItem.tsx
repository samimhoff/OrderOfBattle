import { useState } from 'react';

/*
What props do we need to pass down to side bar item?
    >Title
    >Link
    >Icon


    The sidebar will only include:
        >Units
            >Units
            >Soldiers
            >Vehicles
            >Weapons
            >Equipment
        *^ Note: clicking on a soldier, vehicle, etc. shares a link with the parent unit. 

*/


export const SideBarItem = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? "sidebar-item open" : "sidebar-item"}> 
            <div className="sidebar-title">
                <span>
                    <i className="bi-list"></i>
                    General
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setIsOpen(!isOpen)}></i>
            </div>
            <div className="sidebar-content">
                <i className="bi-list"></i>
                1st Panzer Company
            </div>
        </div>
    )
}