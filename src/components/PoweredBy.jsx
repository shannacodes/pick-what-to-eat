import React from 'react';
import yelplogo from '../assets/cropped-yelp_logo.png';

const PoweredBy = () => {
    return (
        <div className="small-text">
            Data powered by 
            <a href="https://www.yelp.com" 
                alt="Link to Yelp.com"
                target="_blank"
                rel="noopener noreferrer">
                    <img 
                        src={yelplogo} 
                        alt="Yelp Logo" 
                        style={{ width: 75 }}>
                    </img>
            </a>
        </div>
    )
};

export default PoweredBy;