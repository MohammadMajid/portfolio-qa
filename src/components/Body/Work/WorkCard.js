import React from 'react';
import './WorkCard.css';

function WorkCard({ item }) {
    return (
        <div className='work-card'>
            <img src={item.companylogo} className="work-logo"/>
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <div className='work-dates'>
                    <label>{item.designation}</label>-<label>{item.company}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;