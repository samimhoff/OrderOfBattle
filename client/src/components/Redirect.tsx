import React from 'react';
import { Link } from 'react-router-dom';

export const Redirect = () => {
    return (
        <>
            <div className='text-center'>You do not have access to this page. Please log in to access.</div>
            <li className="nav-item active">
                    <Link to="/"> 
                       <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
        </>
    )
}