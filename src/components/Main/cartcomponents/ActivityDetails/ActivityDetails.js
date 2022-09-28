import React from 'react';
import './ActivityDetails.css'

const ActivityDetails = () => {
    return (
        <div className='activity-details'>
            <h4>Activity Details</h4>
            <div className='activity-detail-container'>
                <h5>Activity Time: </h5>
                <p>300s</p>
            </div>
        </div>
    );
};

export default ActivityDetails;