import React from 'react';
import './Header.css'
import logo from '../../../images/schedule-img.png'

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className='logo-img' src={logo} alt="" />
            </div>
            <div>
                <h2><a className='domain-name-link' href="/schedule">Best Schedule</a></h2>
            </div>
        </header>
    );
};

export default Header;