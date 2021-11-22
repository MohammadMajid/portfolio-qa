import React from 'react';
import "./Web.css"

function Web(props) {
    return (
        <div className='web'>
            <div className='web-option'>
            <a href="#project">
            <img src="https://img.icons8.com/ios-glyphs/25/000000/project.png"/>
            Projects</a>
            </div>
            <div className='web-option'>
            <a href="#skills">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/25/000000/external-skills-management-kiranshastry-lineal-kiranshastry-6.png"/>
            Skills</a>
            </div>
            <div className='web-option'>
            <a href="#work">
            <img src="https://img.icons8.com/ios/25/000000/work.png"/>
            Work</a>
            </div>
            <div className='web-option'>
            <a href="#contact">
            <img src="https://img.icons8.com/ios/25/000000/user--v1.png"/>
            Contact</a>
            </div>
        </div>
    );
}

export default Web;