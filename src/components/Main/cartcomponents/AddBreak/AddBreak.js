import React from 'react';
import './AddBreak.css'

const AddBreak = () => {
    return (
        <div>
            <div className='add-break'>
                <h4>Add A Break</h4>
                <div className='add-break-btn-container'>
                    <button>10m</button>
                    <button>20m</button>
                    <button>30m</button>
                    <button>40m</button>
                    <button>50m</button>
                </div>
            </div>
        </div>
    );
};

export default AddBreak;