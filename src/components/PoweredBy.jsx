import React from 'react';
import yelplogo from '../assets/cropped-yelp_logo.png';

const PoweredBy = () => {
    return (
        <div class="small-text">
            Powered by {' '}
            <a href="https://www.yelp.com" 
                alt="Link to Yelp.com"
                target="_blank"
                >
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