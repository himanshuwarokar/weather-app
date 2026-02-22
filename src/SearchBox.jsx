import { useState } from "react";
import "./SearchBox.css";

function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ad59c6a681d6efaae48a7cbfe9530761";

    let getInfoWeather = async() => {
     let responce = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
     );
     let jsonResponse = await responce.json();
     console.log(jsonResponse);
     let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
     }
     console.log(result);
     return result;
    };


    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    
    let handleSubmit = async (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getInfoWeather();
        updateInfo(newInfo);
        
    }
    

    return(
        <div className="searchBox">
        <h1>Search For Weather</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="City Name" id="input" value={city} onChange={handleChange} />
        <br /> <br />
        <button className="btn">SEARCH</button>
        </form>
        </div>
    )
}

export default SearchBox;