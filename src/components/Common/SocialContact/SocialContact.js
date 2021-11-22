import React from 'react';
import { SocialData } from '../Data/SocialMedia';
import "./SocialContact.css"

function SocialContact(props) {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-div'>
                            <img src={item.icon} className='social-icon'/>
                        </div>
                    </a>
                )
            })}
        </div>
    );
}

export default SocialContact;