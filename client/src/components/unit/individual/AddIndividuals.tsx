import React, {useState, useEffect, createContext} from 'react';
import { IndividualRole } from '../../../viewmodels/units/role'; 
import { Nations } from '../../../viewmodels/countries/nations';
import { Leadership } from '../../../viewmodels/units/role';
import { Rank } from '../../../viewmodels/units/rank';
import { AddAnIndividual } from './AddAnIndividual';

export const AddIndividuals = (props: any) => {    
    const [allRows, setAllRows] = useState([]);
    const [isAddingIndividual, setIsAddingIndividual] = useState(false);

    useEffect(() => {
        getAllData();
    }, [])

    //GET request to get all existing personelle on the unit
    const getAllData = async  () => {
        const unitId = props.unitId;
        console.log('unitId: ', unitId);
        try {
            const response = await fetch("http://localhost:5000/unitindividuals/" + props.unitId);
            const jsonData = await response.json();
            console.log('individual rows: ', jsonData);
            if (jsonData != 'no responses') {
                createRows(jsonData);
                return jsonData;
            }
        } catch (error: any) {
            console.log('failure!');
            console.error(error.message);
        }
    }
    // Function passed down into 
    const createRows = (data: any) => {
        if (data.length) {
            const rows: any = [];
            let i = 0;
            data.forEach((row: any) => {
                i++;
                let data = i.toString();
                let dataTarget = "#" + i.toString();
                const currentRow = [
                    <tr key={i}>
                        <td>
                            {row.generic_name}
                        </td>
                        <td>
                            {row.role}
                        </td>
                        <td>
                            {row.leadership}
                        </td>
                        <td>
                            {row.rank}
                        </td>
                        <td>
                            {row.description}
                        </td>
                        <td>
                            <button>
                                Delete
                            </button>
                        </td>

                    </tr>
                ]
                rows.push(currentRow)
            })
            setAllRows(rows);
            return rows;
        }  
    }
    
    const getNewIndividual = () => {
        getAllData();
    }

    return (
        <div>
            <h4 className="text-center mb-3">Attach Personelle</h4>
            {allRows.length ? 
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Unit Leader</th>
                        <th>Rank</th>
                        <th>Description</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {allRows}
                    </tbody>
                </table> 
                : 
                <div>
                    <div className="container text-center">No Personelle. Add below.</div>
                </div>
            }
            {!isAddingIndividual ? 
                <div>
                    <div className=" mt-3 text-center">
                        <button className="btn m-2 btn-primary" onClick={() => setIsAddingIndividual(true)}>Add Personelle</button>
                        <button className="btn m-2 btn-success">Search Personelle</button>
                    </div>
                </div>
                : <></>
            }
            {isAddingIndividual ? 
                <AddAnIndividual key={props.unitId} nation={props.nation} unitId={props.unitId} getNewIndividual={getNewIndividual} setIsAddingIndividual={setIsAddingIndividual}/>
                : <></>
            }
        </div>
    )
}