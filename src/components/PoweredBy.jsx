import React from 'react';
import yelplogo from '../assets/cropped-yelp_logo.png';

const PoweredBy = () => {
    return (
        <div className="small-text">
            Data powered by 
            <img 
                src={yelplogo} 
                alt="Yelp Logo" 
                style={{ width: 75 }}>
            </img>
        </div>
    )
};

export default PoweredBy;