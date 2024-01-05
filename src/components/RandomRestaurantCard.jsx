import React from "react";

const RandomRestaurantCard = ({ randomRestaurant }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-card-details">
                <h1>Here's Our Pick:</h1>
                <p style={{ fontSize: '32px', fontWeight: '600', color: '#ff7e67' }}
                    >{randomRestaurant.name}
                </p>
                <p>Category: {randomRestaurant.categories.map(category => category.title).join(', ')}</p>
                <p>Price: {randomRestaurant.price}</p>
                <p>Rating: {randomRestaurant.rating} out of 5 stars</p>
                <p>Distance: {randomRestaurant.distance.toFixed(2)} meters</p>
                <p>Address: {randomRestaurant.location.address1} {randomRestaurant.location.address2}</p>
                <p>City: {randomRestaurant.location.city}</p>
                <p>State: {randomRestaurant.location.state}</p>
                <p>Zip Code: {randomRestaurant.location.zip_code}</p>
                <p>Phone: {randomRestaurant.display_phone}</p>
                <p>Website: Click{' '}
                    <a href={randomRestaurant.url}
                        alt="Yelp business website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >here</a> for more info
                </p><br />
                <p>
                <img
                    src={randomRestaurant.image_url}
                    alt="Image from selected restaurant"
                    style={{ maxWidth: "100%" }}
                    />
                </p>
            </div>
        </div>
    )
}

export default RandomRestaurantCard;