import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import Activities from './Activities/Activities';
import ActivityCompletedBtn from './cartcomponents/ActivityCompletedBtn/ActivityCompletedBtn';
import ActivityDetails from './cartcomponents/ActivityDetails/ActivityDetails';
import AddBreak from './cartcomponents/AddBreak/AddBreak';
import BreakTime from './cartcomponents/BreakTime/BreakTime';
import MyProfile from './cartcomponents/MyProfile/MyProfile';
import Header from './Header/Header';
import './Main.css';

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [activityTime, setActivityTime] = useState(0);
    const [addBreakTime, setAddBreakTime] = useState(0);

    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    useEffect(() => {
        const items = localStorage.getItem('break-time');
        if (items) {
            setAddBreakTime(items);
        }
      }, []);


    const handleActivityTime = (time) => {
        const newActivityTime = time + activityTime;
        setActivityTime(newActivityTime)
    }

    const handleAddBreak = (breakTime) => {
        
        const getTime = localStorage.getItem('break-time');
        if(getTime === null) {
            localStorage.setItem('break-time', +breakTime);
        }
        else {
            localStorage.setItem('break-time', +breakTime);
        }
        
        setAddBreakTime(breakTime)
    }

    return (
        <main>
            <div className="main-container">
                <div className="all-activity-container">
                    <Header />
                    <Activities 
                        activities={activities}
                        handleActivityTime={handleActivityTime}
                    />            
                </div>
                <div className="activity-cart-container">
                    <MyProfile />
                    <AddBreak
                        handleAddBreak={handleAddBreak} 
                    />
                    <ActivityDetails 
                        activityTime={activityTime} 
                    />
                    <BreakTime
                        addBreakTime={addBreakTime}
                    />
                    <ActivityCompletedBtn />
                </div>
            </div>
            <div className='blogs-container'>
                <div className="devider"></div>
                <Blog />
            </div>
        </main>
    );
};

export default Main;