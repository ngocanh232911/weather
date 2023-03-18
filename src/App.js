import {useEffect, useState} from 'react';

import { React } from 'react';


function App() {
  const [city, setCity] = useState('');
 
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a6858dd1bb51c8b58e5eb6f98efdb7ca`);
      const json = await response.json();
      setWeatherData(json);
      
     
     
    }
    if (city) {
      getData();
    }
  }, [city])

  
  const handleChange = (e) => {
    setCity(e.target.value);

  }
  
  const responseWeatherToUser = (!weatherData || weatherData.message==='city not found') ? null : (
    <div>
      <p>{weatherData.name}, {weatherData.sys.country}</p>
      <p>Temperature: {weatherData.main.temp} </p>
      <p>Feels like: {weatherData.main.feels_like}  </p>
      <p>Weather: {weatherData.weather[0].main} </p>
      <p> Humidity:{weatherData.main.humidity}</p>
      
    </div>
  )

  return (
    <div className="App">
        <p>forecast</p>
     
        <input
          value={city}
          onChange = {handleChange}
          type = 'text'
         
        ></input>

      
        {responseWeatherToUser }

    </div>
  );
}

export default App;