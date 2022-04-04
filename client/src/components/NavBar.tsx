import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light coloration">
            <a className="navbar-brand" href="#">Library of Battle</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/">
                       <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/units">
                      <a className="nav-link" href="#">Browse Units</a>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Submit
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/units/add">
                        <a className="dropdown-item" href="#">Unit</a>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/weapons">
                     <a className="dropdown-item" href="#">Weapon</a>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Equipment</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Guide for Beginners</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">History</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}