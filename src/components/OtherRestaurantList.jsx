import React from "react";

const OtherRestaurantList = ({ restaurants }) => {
    return (
        <div className="other-restaurants-container">
            <h3>Discover Other Restaurants Near You...</h3>
            <ul>
            {restaurants.map((restaurant) => (
                <li key={restaurant.id}>{restaurant.name}</li>
            ))}
            </ul>
      </div>
    );
  };

export default OtherRestaurantList;