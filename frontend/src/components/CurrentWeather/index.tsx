import React from 'react';

import { Container } from './styles';

import { TiWeatherCloudy } from 'react-icons/ti'

export default function CurrentWeather(){
  return (
    <Container>
      <div className="currentWeather">
        <TiWeatherCloudy 
          size='25vh'
          fill='white'
        />
        <div>
          <h1>21º</h1>
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

