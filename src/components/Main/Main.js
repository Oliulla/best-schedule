import React from 'react';
import Activities from './Activities/Activities';
import Header from './Header/Header';
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="all-activity-container">
                    <Header />
                    <Activities />            
                </div>
                <div className="activity-cart-container">
                    <h2>This is activity cart</h2>
                </div>
            </div>
        </main>
    );
};

export default Main;