import React from 'react';
import './BreakTime.css'

const BreakTime = ({addBreakTime}) => {
    return (
        <div>
            <div className="activity-break-container">
                <h5>Break Time</h5>
                <p>{addBreakTime}</p>
            </div>
        </div>
    );
};

export default BreakTime;