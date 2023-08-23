import React, { useState, useEffect } from 'react';
import './LocationSelector.css'; // Import your CSS file for styling
import { useLocation } from 'react-router-dom';

function LocationSelector() {
  const [locations, setLocations] = useState([]);

  const location = useLocation();
  const data = location.state.data;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="location-selector">
      <h2>Location Selection</h2>
      <p>Select a Pick-up / Return location.</p>
      <h>{data}</h>
      <form>
        {locations.map(location => (
          <div key={location.id} className="location-item">
            <label htmlFor={`location-${location.id}`} className="radio-label">
              <input
                type="radio"
                name="selectedLocation"
                value={location.id}
                id={`location-${location.id}`}
               
              />
              <span className="location-name">
                {location.name}
              </span>
            </label>
            <p className="location-email">{location.email}</p>
          </div>
        ))}
      </form>
    </div>
  );
}

export default LocationSelector;
