import React, { useState, useEffect } from 'react';
import Activities from './Activities/Activities';
import ActivityCompletedBtn from './cartcomponents/ActivityCompletedBtn/ActivityCompletedBtn';
import ActivityDetails from './cartcomponents/ActivityDetails/ActivityDetails';
import AddBreak from './cartcomponents/AddBreak/AddBreak';
import BreakTime from './cartcomponents/BreakTime/BreakTime';
import MyProfile from './cartcomponents/MyProfile/MyProfile';
import Header from './Header/Header';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [activityTime, setActivityTime] = useState(0);
    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    // console.log(activities)

    const handleActivityTime = (time) => {
        const newActivityTime = time + activityTime;
        setActivityTime(newActivityTime)
    }
    // console.log(activityTime)

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
                    <AddBreak />
                    <ActivityDetails activityTime={activityTime} />
                    <BreakTime />
                    <ActivityCompletedBtn />
                </div>
            </div>
        </main>
    );
};

export default Main;