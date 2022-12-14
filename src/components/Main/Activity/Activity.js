import React from 'react';
import './Activity.css'

const Activity = ({activity, handleActivityTime}) => {
    const {picture, name, time} = activity;
    
    return (
        <div>
            <div className="card">
                <div>
                    <img className='thumb-img' src={picture} alt={name} />
                </div>
                <div className="card-info">
                    <h4>{name}</h4>
                    <p>Time Required: {time}hrs</p>
                    <button onClick={() => handleActivityTime(time)} className='add-list-btn'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;