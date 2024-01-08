import React from "react";

const OtherRestaurantList = ({ restaurants }) => {
    return (
        <div className="other-restaurants-container">
            <h3>Discover Other Restaurants Near You...</h3>
            <ul>
            {restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                    <a 
                      href={restaurant.url} 
                      alt='Yelp restaurant website'
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                        {restaurant.name}
                    </a>
                </li>
            ))}
            </ul>
      </div>
    );
  };

export default OtherRestaurantList;