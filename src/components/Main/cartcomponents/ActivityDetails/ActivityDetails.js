import React from 'react';
import './ActivityDetails.css'

const ActivityDetails = ({activityTime}) => {
    return (
        <div className='activity-details'>
            <h4>Activity Details</h4>
            <div className='activity-detail-container'>
                <h5>Activity Time: </h5>
                <p>{activityTime}<small>hrs</small></p>
            </div>
        </div>
    );
};

export default ActivityDetails;