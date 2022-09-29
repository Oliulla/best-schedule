import React from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = ({activities, handleActivityTime}) => {

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