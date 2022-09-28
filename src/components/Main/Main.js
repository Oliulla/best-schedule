import React from 'react';
import Header from './Header/Header';
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="activity-container">
                    <Header />                    
                </div>
                <div className="activity-cart-container">
                    <h2>This is activity cart</h2>
                </div>
            </div>
        </main>
    );
};

export default Main;