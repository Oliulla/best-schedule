import React from 'react';
import './ActivityCompletedBtn.css';
import Swal from 'sweetalert2';

const ActivityCompletedBtn = () => {
    const handleCompletedBtn = () => {
        Swal.fire(
            'Good job!',
            `You Completed Your Today's Activity!`,
            'success'
        )
    }

    return (
        <div className='activity-btn'>
            <button onClick={handleCompletedBtn} className='toast-btn'>
                Activity Completed
            </button>
        </div>
    );
};

export default ActivityCompletedBtn;