import React from 'react';
import './MyProfile.css'
import profileImg from '../../../../images/my-formal-img.jpg'

const MyProfile = () => {
    return (
        <div>
            <div>
                <h3>About Developer</h3>
                <div className='profile-card'>
                    <div>
                        <img className='profile-img' src={profileImg} alt="" />
                    </div>
                    <div>
                        <h3>Md. Oliullah Sarder</h3>
                        <p>Barishal, Bangladesh</p>
                    </div>
                </div>
                <div className='profile-info'>
                    <div className='developer-detail'>
                        <span className='blood-group'>O(v+)</span>
                        <span className='blood-group'>Blood Group</span>
                    </div>
                    <div className='developer-detail'>
                        <span>24yrs</span>
                        <span>Age</span>
                    </div>
                    <div className='developer-detail'>
                        <span>5.10</span>
                        <span>Height</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;