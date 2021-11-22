import React from 'react';
import About from './About/About';
import "./Body.css"
import Contact from './Contact/Contact';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Work from './Work/Work';

function Body(props) {
return (
    <div className='body'>
        <section id='about'>
            <About></About>
        </section>
        <section id='projects'>
            <Project></Project>
        </section>
        <section id='skills'>
             <Skills></Skills>
        </section>
        <section id='work'>
            <Work></Work>
        </section>
        <section id='contact'>
            <Contact></Contact>
        </section>
    </div>
);
}

export default Body;