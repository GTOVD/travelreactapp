import React from 'react';
import Logo from './logo.svg';

export default function Header () {

    return(
        <div className="nav-main">
            <nav className="nav-bar">
                <img src={Logo} alt="logo" className="nav-logoImg"/>
                <h1>My Travel Journal</h1>
            </nav>
        </div>
    )

}