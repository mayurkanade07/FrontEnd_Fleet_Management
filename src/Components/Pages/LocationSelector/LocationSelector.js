import React, { useState, useEffect } from 'react';
import './LocationSelector.css'; // Import your CSS file for styling
import { useLocation } from 'react-router-dom';

function LocationSelector() {
  const [locations, setLocations] = useState([]);
  
  // const location = useLocation();
  // const data = location.state.name;
  // console.log("Name="+data)
  useEffect(() => {
    fetch("http://localhost:8080/api/hubs")
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="location-selector">
      <h2>Location Selection</h2>
      <p>Select a Pick-up / Return location.</p>
      {/* <h>{locations}</h> */}
      <form>
        {locations.map(location => (
          <div key={location.hubId} className="location-item">
            <label htmlFor={`location-${location.hubId}`} className="radio-label">
              <input
                type="radio"
                name="selectedLocation"
                value={location.hubName}
                id={`location-${location.hubId}`}
               
              />
              <span className="location-name">
                {location.hubName}
              </span>
            </label>
            <p className="location-email">{location.address}</p>
          </div>
        ))}
      </form>
    </div>
  );
}

export default LocationSelector;
