import React, { useState, useEffect } from 'react';
import logo from './assets/pickforme.png';
import RandomRestaurantCard from './components/RandomRestaurantCard';
import OtherRestaurantList from './components/OtherRestaurantList';
import PoweredBy from './components/PoweredBy';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const getRandomRestaurant = async () => {
    try {
      const apiKey = 'o1F6Otq3zOJIejq8dya0O2I1rjVYlQsIZ7EHcdsrQNt6TA3c-CpzbQ4lmT9R4PyJOzj56s1innbZ3fQnbwAB9UXcH-3Gb0utbCRBLWeFYUXuTVlJV_qpTH2s_k6WZXYx';
      const queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${zipCode}&limit=25`;

      const response = await fetch(queryURL, {  
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: 'application/json',
          'x-requested-with': 'xmlhttprequest',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!response.ok) {
        throw new Error(`Yelp API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setRestaurants(data.businesses);

      if (data.businesses.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.businesses.length);
        setRandomRestaurant(data.businesses[randomIndex]);
      } else {
        setRandomRestaurant(null);
      }
    } catch (error) {
      console.error('Error fetching data from Yelp API:', error.message);
    }
  };

  const handlePickForMe = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    if (buttonClicked && zipCode.trim() !== '') {
      getRandomRestaurant();
      setButtonClicked(false); // Reset the buttonClicked state
    }
  }, [buttonClicked, zipCode]);

  return (
    <>
      <div>
        <img
          src={logo}
          alt="Pick For Me App Logo"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }}
        />
        <div className="main-form-container">
          <h1>Can't figure out what to eat?</h1>
          <h2>Let us pick for you!</h2>
          <p>Try out this fun app that takes the headache out of deciding what to eat when you're just too <i>hangry</i> to decide!</p><br />
          <p>Simply fill out the form below.</p>
          <br></br>
          <label>
            Your Zip Code: {' '} 
            <input 
              type="text"
              id="zipCode" 
              value={zipCode} 
              onChange={handleZipCodeChange} 
              aria-label="Zip Code"
              aria-required="true" 
            />
          </label>
          <button onClick={handlePickForMe} aria-label='Choose for me'>
            Choose for me!
          </button>
        </div>

        <div className="small-text">NOTE: Please go{' '}
          <a
            href="https://cors-anywhere.herokuapp.com/corsdemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}and request temporary access to the demo server if data is not loading.</div>
   
        <div>
          {randomRestaurant && ( 
            <RandomRestaurantCard randomRestaurant={randomRestaurant} />
          )}

          {restaurants.length > 0 && (
            <OtherRestaurantList restaurants={restaurants} />
          )}

          <PoweredBy />
        </div>
      </div>
    </>
  );
}

export default App;