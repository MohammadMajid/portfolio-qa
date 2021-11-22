import React from 'react';
import './Mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-close-banking-and-finance-kiranshastry-gradient-kiranshastry.png"/>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
            <a href="#project">
            <img src="https://img.icons8.com/ios-glyphs/25/000000/project.png"/>
            Projects</a>
            </div>
            <div className='mobile-option'>
            <a href="#skills">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/25/000000/external-skills-management-kiranshastry-lineal-kiranshastry-6.png"/>
            Skills</a>
            </div>
            <div className='mobile-option'>
            <a href="#work">
            <img src="https://img.icons8.com/ios/25/000000/work.png"/>
            Work</a>
            </div>
            <div className='mobile-option'>
            <a href="#contact">
            <img src="https://img.icons8.com/ios/25/000000/user--v1.png"/>
            Contact</a>
            </div>
            </div>
        </div>
    );
}

export default Mobile;