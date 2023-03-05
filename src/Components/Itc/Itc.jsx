import React from 'react';
import './Itc.css';
import T1 from './t1.png';

const Itc = () => {
    return (
        <>
        <div className='box'>
        <div className='itcImage'>
        <img src={T1}/>
        </div>

        <div className='copyright'>
            <p>Copyright © ITC Limited 2023. All rights reserved.</p>
        </div>

        </div>
            
        </>
    );
};

export default Itc;