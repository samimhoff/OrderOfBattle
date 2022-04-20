import React, {useState, useEffect} from 'react';
const axios = require('axios'); 

export const GetWeapons = (props: any) => {
    useEffect(() => {
        getAllData();
    }, [])

    const [allRows, setAllRows] = useState();
    const [editingId, setEditingId] = useState(null);
    
    const getAllData = async () => {
        try {
            const response = await fetch("http://localhost:5000/weapons");
            const jsonData = await response.json();
            createRow(jsonData);
            return jsonData;
        } catch (error) {
            console.error(error);
        }
    }

    const deleteWeapon: any = async(id: any) => {
        try {
            const response = await axios.delete("http://localhost:5000/weapons/" + id)
            getAllData();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    
    const createRow =  (data: any) => {
        const allRows: any = [];
        let i = 0;
        data.forEach((row: any) => {
            i++;
            let data = i.toString();
            let dataTarget = "#" + i.toString();
            const currentRow = [
                <tr key={i}>
                    <td>
                        <img style={{width: "130px"}} src={row.photo} alt="" />
                    </td>
                    <td>
                        {/* <input type="text" className="form-control" value={}/> */}
                        {row.name}
                    </td>
                    <td className="px-1">{row.caliber}</td>
                    <td className="pl-1 pr-0">{row.nationoforigin}</td>
                    <td className="px-0">{row.effectiverange}</td>
                    <td>{row.rateoffire}</td>
                    <td>{row.weight}</td>
                    <td>{row.capacity}</td>
                    <td>{(row.date).split('').splice(0,10)}</td>
                    <td>{row.weapontype}</td>
                    <td className='pr-0'>{row.crewserved === false ? "No" : "Yes"}</td>
                    <td className="pr-1 pl-0 pt-1">
                        <button type="button" className="btn btn-outline-primary mx-0" data-toggle="modal" data-target={dataTarget}>
                            {row.weapontype}
                        </button>
                        <div className="modal fade" id={data} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">{row.name} Description</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {row.description}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="pt-1 px-1">
                        {props.retrieveWeapon != undefined ? 
                        <button type="button" className='btn btn-primary mx-0' onClick={() => {props.retrieveWeapon(row.weapon_id, row.name)}}>
                            Select
                        </button>
                        :
                        <button type="button" className='btn btn-secondary mx-0' onClick={() => {props.retrieveWeapon(row.weapon_id, row.name)}}>
                            Edit
                        </button>
                        }
                    </td>
                    <td className=" pt-1 pl-0"> 
                        <button type="button" className='btn btn-danger mx-0' onClick={() => deleteWeapon(row.weapon_id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ];
            allRows.push(currentRow);
        })
        setAllRows(allRows);
        return allRows;
    }
    
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <th>Photo</th>
                    <th>Name</th>
                    <th className="px-1">Caliber</th>
                    <th className="pl-1 pr-0">Nation</th>
                    <th className="px-0">Range (meters)</th>
                    <th>ROF</th>
                    <th>Lbs.</th>
                    <th>Capacity</th>
                    <th>Date Issued</th>
                    <th>Type</th>
                    <th>Crew Served</th>
                    <th className='pr-1 pl-0'>Description</th>
                    <th className="pr-0"></th>
                    <th className="pl-0"> </th>
                </thead>
                <tbody>
                    {allRows}

                </tbody>
            </table>
        </div>
    )
}