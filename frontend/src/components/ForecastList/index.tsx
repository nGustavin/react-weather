import React, { useEffect, useState } from 'react';
import { Container} from './styles';

import { TiWeatherCloudy, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny } from 'react-icons/ti'
import axios from 'axios';

interface WeatherInfo{
  forecast: {
    forecastday:[
      index: {
        hour: [
          index: {
            temp_c: 'number',
            condition: {
              text: 'string',
              icon: 'string'
            }
          }
        ]
      },
    ]
  }
}

const ForecastList: React.FC = () => { 
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState<WeatherInfo>()

  useEffect(() => {
    axios.get('https://api.weatherapi.com/v1/forecast.json?key=dc546a4fbf4d45508cf212117210403&q=Curitiba&aqi=no').then(response => {
      setWeather(response.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <Container>
      <h1>Forecast</h1>
      {isLoading ? <div className="loader"></div> : 
      <div className="grid-container">

        {
          weather?.forecast.forecastday[0].hour.map((hour, index) => {
            return(
              <div>
                <div>
                  <h3>04.01</h3>
                  <h3>{index}:00</h3>
                </div>
                <img src={hour.condition.icon} alt={hour.condition.text}/>
                <h2>{hour.temp_c}º</h2>
              </div>
            )
          })
        }
      </div>
      }
    </Container>
  );
};

export default ForecastList;
