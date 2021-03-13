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
    temp_c: 'number';
    wind_kph: 'number',
    condition: {
      icon: 'string',
      text: 'string'
    }
  }
  forecast: {
    forecastday:[
      index: {
        day: {
          maxtemp_c: 'number';
          mintemp_c: 'number';
          daily_chance_of_rain: 'number';
          
        }
        astro: {
          sunrise: 'string';
          sunset: 'string';
        }
      },
    ]
  }
}

export default function CurrentWeather(){
  const [ weather, setWeather ] = useState<WeatherInfo>()

  useEffect(() => {
    api.get('https://api.weatherapi.com/v1/forecast.json?key=dc546a4fbf4d45508cf212117210403&q=Curitiba&aqi=no').then(response => {
      setWeather(response.data)
    })
  }, [])

  console.log(weather)
 
  return (
    <Container>
      <div className="currentWeather">
        <img 
          src={'https:' + weather?.current.condition.icon}
          alt="WeatherIcon"
        />
        <div>
          <h1>{weather?.current.temp_c} º</h1>
          <p>{weather?.current.condition.text}</p>
        </div>
      </div>
      <div className='weatherData'>
          <div>
            <h2>{weather?.forecast.forecastday[0].day.maxtemp_c}º</h2>
            <h3>Max</h3>
          </div>
          <div>
            <h2>{weather?.current.wind_kph} Km/h</h2>
            <h3>Wind</h3>
          </div>
          <div>
            <h2>{weather?.forecast.forecastday[0].astro.sunrise}</h2>
            <h3>Sunrise</h3>
          </div>
          <div>
            <h2>{weather?.forecast.forecastday[0].day.mintemp_c}º</h2>
            <h3>Min</h3>
          </div>
          <div>
            <h2>{weather?.forecast.forecastday[0].day.daily_chance_of_rain} %</h2>
            <h3>Rain</h3>
          </div>
          <div>
            <h2>{weather?.forecast.forecastday[0].astro.sunset}</h2>
            <h3>Sunset</h3>
          </div>
      </div>
    </Container>
  );
};

