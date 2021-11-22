import React from 'react';
import Separator from '../../Common/Separator/Separator';
import './Work.css'
import WorkCard from './WorkCard';
import { WorkData } from '../../Common/Data/Work'

function Work(props) {
    const data = WorkData;
    
    return (
        <div className='work'>
            <Separator></Separator>
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {data.map((item)=>{
                    return( <WorkCard item={item}></WorkCard>);
                })}</div>
        </div>
    );
}

export default Work;