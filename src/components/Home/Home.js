import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Home.css"

function home() {
    return (
        <div className='home'>
            <div>
                <Header></Header>
            </div>
            <div>
                <Body></Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default home;