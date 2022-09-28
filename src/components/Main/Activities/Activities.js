import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    // console.log(activities)

    return (
        <div>
            <div className='activities-container'>
                <h3>Select Today's Schedule</h3>
                {
                    activities.map(activity => console.log(activity))
                }
            </div>
        </div>
    );
};

export default Activities;