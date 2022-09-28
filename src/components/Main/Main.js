import React from 'react';
import Activities from './Activities/Activities';
import AddBreak from './cartcomponents/AddBreak/AddBreak';
import MyProfile from './cartcomponents/MyProfile/MyProfile';
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
                    <MyProfile />
                    <AddBreak />
                </div>
            </div>
        </main>
    );
};

export default Main;