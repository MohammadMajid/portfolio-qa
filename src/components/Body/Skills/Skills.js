import React from 'react';
import Separator from '../../Common/Separator/Separator';
import SkillCard from './SkillCard';
import './Skills.css';
import { SkillsData } from '../../Common/Data/Skills'

function Skills() {
    const data = SkillsData;

    return (
        <div className='skills'>
            <Separator></Separator>
            <label className='section-title'>Skills</label>
            <div className='skills-container'>
                {data.map((item)=>{
                    return(
                        <div className='skills-section'>
                           <label className='skills-section-title'>{item.type}</label>
                            <div className='skills-list'>
                                {item.list.map((skill)=>{
                                    return <SkillCard skill={skill}></SkillCard>;
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;