import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import { TiWeatherCloudy } from 'react-icons/ti'
import api from '../../api/api';

interface WeatherInfo{
  location: {
    country: "string",
    lat: "number",
    lon: "number",
    localtime: "number",
    name: "string",
    region: "string",
  },
  current: {
    condition: {
      icon: 'string',
      text: 'string'
    }
  }
}

export default function CurrentWeather(){

  const [ weather, setWeather ] = useState<WeatherInfo>()

  useEffect(() => {
    api.get('https://api.weatherapi.com/v1/current.json?key=dc546a4fbf4d45508cf212117210403&q=Curitiba&aqi=no').then(response => {
      setWeather(response.data)
    })
  }, [])

  console.log(weather)
 
  return (
    <Container>
      <div className="currentWeather">
        <TiWeatherCloudy 
          size='10rem'
          fill='white'
        />
        <div>
          <h1>{weather?.location.name}</h1>
          <p>Broken Clouds</p>
        </div>
      </div>
      <div className='weatherData'>

        <div>
        <div>
          <h2>22º</h2>
          <h3>Max</h3>
        </div>
        <div>
          <h2>6.69Km/h</h2>
          <h3>Wind</h3>
        </div>
        <div>
          <h2>6:00</h2>
          <h3>Sunrise</h3>
        </div>
       </div>
          <div>
          <div>
            <h2>20º</h2>
            <h3>Low</h3>
          </div>
          <div>
            <h2>79%</h2>
            <h3>Rain</h3>
          </div>
          <div>
            <h2>6:40</h2>
            <h3>Sunset</h3>
          </div>
          </div>
      </div>
    </Container>
  );
};

