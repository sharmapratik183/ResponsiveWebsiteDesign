import React from 'react';
import './Circle2.css';
import F1 from './food1.jpg';
import F3 from './food3.jfif';
import F4 from './food4.jpg';
import F5 from './food5.jfif';
import F6 from './food6.jfif';
import F7 from './food7.jpg';
import F8 from './food8.jfif';


const Circle2 = () => {
    return (
        <>
        <div className='container'>
        <div className='explorer'>
        <p className='category'>For all your needs</p>
        </div>
        <div  id='spa' className='food'>
        <div className='imageContainers'>
        <img src={F6}/>
        <span>Toiletries </span>
        <span></span>
        </div>
        <div className='imageContainers'>
        <img src={F5}/>
        <span>Extra </span>
        <span>Towels</span>
        </div>
        <div className='imageContainers'>
        <img src={F4}/>
        <span>Bed  </span>
        <span>Linens</span>
        </div>
        <div className='imageContainers'>
        <img src={F5}/>
        <span>Laundary  </span>
        <span>Services</span>
        </div>
        <div className='imageContainers'>
        <img src={F6}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainers'>
        <img src={F7}/>
        <span>Spa &</span>
        <span>Wellness</span>
        </div>
        <div className='imageContainers'>
        <img src={F8}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainers'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainers'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainers'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>
        <div className='imageContainers'>
        <img src={F1}/>
        <span>Food &</span>
        <span>Beverages</span>
        </div>

        </div>
        </div>

            
        </>
    );
};

export default Circle2;