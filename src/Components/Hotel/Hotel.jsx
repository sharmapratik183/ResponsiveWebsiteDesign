import React from 'react';
import './Hotel.css';
import H2 from './h2.png';

const Hotel = () => {
    return (
        <>
        <div className='image'>
        <div className='left'>
        
        <div className='authentic'>
        <span>Authentic</span>
        <span>Indigenous</span>
        <span>Luxury</span>
        <span>Experiences</span>
        </div>

        <div className='pamper'>
            <p>Get all the pampering you</p>
            <p>deserve with our all</p>
            <p>inclusive package.</p>
            <p>Includes all daily meals,</p>
            <p>Wi-Fi & more.</p>
        </div>

        <div className='btn'>
        <button className='btn2'>Know more</button>
        </div>

        </div>
        <div className='right'>
        <img src={H2}/>
        </div>
        </div>
            
        </>
    );
};

export default Hotel;