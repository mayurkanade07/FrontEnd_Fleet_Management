import { useState } from "react"; 
import States from "./States";
import Cities from "./Cities"; 
import Popup from "./Popup";

export default function CityState(props) {
    const [citiesList, setCitiesList] = useState([]);

    return (
        <section>
                <td><label for='loc'>Enter State</label></td>
                <td> <States setCitiesList={setCitiesList} citiesList={citiesList} ></States> </td>
                <td> <Cities citiesList={citiesList} ></Cities> </td>
                {/* <td><button onClick={() => console.log(5 + 6)}>Search</button></td> */}
                <td><Popup/></td>
        </section>
    )

}