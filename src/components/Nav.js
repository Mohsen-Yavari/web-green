import React from 'react';

import {Link} from 'react-router-dom';
import logo from "../img/logo.avif";


const Nav = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/"className="navbar-brand " ><img src={logo} alt="" className="logo" /></Link>
                    <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">خانه</Link>
                        </li>
                      
                        <li className="nav-item">
                        <Link className="nav-link active" to="/about">درباره ما</Link>
                        </li>
                      
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">خانه</Link>
                        </li>
                      
                    </ul>
                   
                    </div>
                </div>
                </nav>

        </>
    );
};

export default Nav;