import React from 'react';
import SocialContact from '../../Common/SocialContact/SocialContact';
import './About.css'

function About(props) {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                     <span className='info-name'>SDET / Automation Tester</span>
                    <div className='testing-list'>
                        <ul>Full STLC Support</ul>
                        <ul>Manual Testing</ul>
                        <ul>Test Automation</ul>
                        <ul>Performance Testing</ul>
                        <ul>Microservice Testing</ul>                    
                    </div>
                </div>
                <div className='about-photo'>
                    <img className='profile-image' src={require('../../../Images/majid.png').default}/>
                </div>
            </div>
            
        </div>
    );
}

export default About;