import React from 'react';
import './Circle.css';
import F1 from './food1.jpg';
import F3 from './food3.jfif';
import F4 from './food4.jpg';
import F5 from './food5.jfif';
import F6 from './food6.jfif';
import F7 from './food7.jpg';
import F8 from './food8.jfif';


const Circle = () => {
    return (
        <>
        <div className='containers'>
        <div className='explorers'>
        <p className='categories'>Explore By Category</p>
        </div>
        <div  id='spas' className='foods'>
        <div className='imageContainer'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F3}/>
        <span>Spa &</span>
        <span>Wellness</span>
        </div>
        <div className='imageContainer'>
        <img src={F4}/>
        <span>Room  </span>
        <span>Amenities</span>
        </div>
        <div className='imageContainer'>
        <img src={F5}/>
        <span>Laundary  </span>
        <span>Services</span>
        </div>
        <div className='imageContainer'>
        <img src={F6}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F7}/>
        <span>Spa &</span>
        <span>Wellness</span>
        </div>
        <div className='imageContainer'>
        <img src={F8}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainer'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>

        </div>
        </div>

            
        </>
    );
};

export default Circle;