import React from 'react'

import './style.css'
import logo from '../../assets/img/logobee_yellow.png';
import Routes from '../../utils/routes'

export default function Navbar(){
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <a href=""></a><img src={logo} alt="Logo for the page"/>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href={Routes.home}>Home</a></li>
                        <li><a href={Routes.projects}>Projects</a></li>
                        <li><a href={Routes.about}>About</a></li>
                        <li><a href={Routes.contact_us}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn-sign">Entrar</button>
                </div>
            </nav>
        </>
    )
}