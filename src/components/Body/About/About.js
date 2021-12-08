import React from 'react';
import SocialContact from '../../Common/SocialContact/SocialContact';
import './About.css'

function About(props) {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                     <span className='info-name'>SDET / Automation Tester</span>
                     <p>A passionate SDET | Automation Tester | Web Developer | Programmer 🚀 having an experience of designing, building and testing Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
{/*                     <div className='testing-list'>                       
                        <ul>Full STLC Support</ul>
                        <ul>Test Automation</ul>
                        <ul>Performance Testing</ul>
                        <ul>Microservice Testing</ul>                  
                    </div>
                    */}   
                </div>
                <div className='about-photo'>
                    <img className='profile-image' src={require('../../../Images/majid.png').default}/>
                </div>
            </div>
            
        </div>
    );
}

export default About;