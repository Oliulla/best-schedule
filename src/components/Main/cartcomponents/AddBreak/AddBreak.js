import React from 'react';
import './AddBreak.css'

const AddBreak = ({handleAddBreak}) => {
    
    return (
        <div>
            <div className='add-break'>
                <h4>Add A Break</h4>
                <div className='add-break-btn-container'>
                    <button title='please click on the number'>
                        <span onClick={(e) => handleAddBreak(e.target.innerText)}>10</span>
                        <small>m</small>
                    </button>
                    <button title='please click on the number'>
                        <span onClick={(e) => handleAddBreak(e.target.innerText)}>20</span>
                        <small>m</small>
                    </button>
                    <button title='please click on the number'>
                        <span onClick={(e) => handleAddBreak(e.target.innerText)}>30</span>
                        <small>m</small>
                    </button>
                    <button title='please click on the number'>
                        <span onClick={(e) => handleAddBreak(e.target.innerText)}>40</span>
                        <small>m</small>
                    </button>
                    <button title='please click on the number'>
                        <span onClick={(e) => handleAddBreak(e.target.innerText)}>50</span>
                        <small>m</small>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBreak;