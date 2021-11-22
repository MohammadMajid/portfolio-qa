import React, { useState } from 'react';
import './Header.css'
import Mobile from './Mobile/Mobile';
import Web from './Web/Web.js'

function Header(props) {
    const [isOpen, setIsOpen] = useState(false); 
    return (
    <div className='header'>
        <div className='logo'>Mohammad Majid</div>

        <div className='menu'>
        <div className='web-menu'>
            <Web></Web>
            </div>
        <div className='mobile-menu'>
        <div onClick={() => setIsOpen(!isOpen)}>
        <img className='menu-icon' src="https://img.icons8.com/ios-filled/50/000000/menu--v3.png"/>
        </div>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}></Mobile>}
        </div>
    </div>
    );
}

export default Header;