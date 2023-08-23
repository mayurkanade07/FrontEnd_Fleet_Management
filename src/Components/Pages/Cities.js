import { useState, useEffect } from "react"; 


export default function Cities(props) { 
    const {citiesList} = props; 


    return (
        <section>
            <select>
                <option value="SelectCities">Select Cities</option>
                {citiesList.map(city => (
                    <option key={city.cityId} value={city.cityId}>
                        {city.cityName}
                    </option> 
                ))}
            </select>
        </section>
    )
}