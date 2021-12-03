import React from 'react';
import './WorkCard.css';

function WorkCard({ item }) {
    return (
        <div className='work-card'>
            <img src={item.companylogo} className="work-logo"/>
            <div className='work-info'>
                <label className='company-name'>{item.projectname}</label>
                <div className='work-dates'>
                    <a href={item.work}>{item.designation}</a>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;