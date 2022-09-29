import React from 'react';
import './ActivityCompletedBtn.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityCompletedBtn = () => {
    const handleCompletedBtn = () => {
        toast(`Good job! you completed your today's activities.`);
    }

    return (
        <div className='activity-btn'>
            <button onClick={handleCompletedBtn} className='toast-btn'>
                Activity Completed
            </button>
            <ToastContainer />
        </div>
    );
};

export default ActivityCompletedBtn;