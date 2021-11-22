import React from 'react';
import SocialContact from '../../Common/SocialContact/SocialContact';
import './About.css'

function About(props) {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    User Experience / User Interface <br/> <span className='info-name'>SDET / Developer</span>
                    <p>Willing to contribute using my technical expertise to the future growth and success of the organization. 
                        I work well under pressure on multiple projects to successfully deliver well developed software.</p>
                </div>
                <div className='about-photo'>
                    <img className='profile-image' src={require('../../../Images/majid.png').default}/>
                </div>
            </div>
            
        </div>
    );
}

export default About;