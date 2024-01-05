import React from "react";

const RandomRestaurantCard = ({ randomRestaurant }) => {
    return (
        <div>
            <h1>Here's Our Pick!:</h1>
            <p>Name: {randomRestaurant.name}</p>
            <p>Category: {randomRestaurant.categories.map(category => category.title).join(', ')}</p>
            <p>Price: {randomRestaurant.price}</p>
            <p>Rating: {randomRestaurant.rating} out of 5 stars</p>
            <p>Distance: {randomRestaurant.distance.toFixed(2)} meters</p>
            <p>Address: {randomRestaurant.location.address1} {randomRestaurant.location.address2}</p>
            <p>City: {randomRestaurant.location.city}</p>
            <p>State: {randomRestaurant.location.state}</p>
            <p>Zip Code: {randomRestaurant.location.zip_code}</p>
            <p>Phone: {randomRestaurant.display_phone}</p>
            <p>Image: <br />
              <img
                src={randomRestaurant.image_url}
                alt="Image from selected restaurant"
                style={{ maxWidth: "50%" }}
                />
            </p>
        </div>
    )
}

export default RandomRestaurantCard;