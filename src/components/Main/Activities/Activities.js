// import React, { useEffect, useState } from 'react';
import React from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = ({activities, handleActivityTime}) => {
    // console.log(activities)
    // const [activities, setActivities] = useState([]);
    // useEffect(() => {
    //     fetch('activity.json')
    //     .then(res => res.json())
    //     .then(data => setActivities(data))
    // }, [])
    // // console.log(activities)

    return (
        <div>
            <h3 className='thumb-text' >Select Today's Schedule</h3>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleActivityTime={handleActivityTime}
                        /> 
                    )
                }
            </div>
        </div>
    );
};

export default Activities;