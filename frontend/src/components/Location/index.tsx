import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Container } from './styles';

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


function Location() {

  const [ weather, setWeather ] = useState<WeatherInfo>()

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];

  useEffect(() => {
    api.get('https://api.weatherapi.com/v1/current.json?key=dc546a4fbf4d45508cf212117210403&q=Curitiba&aqi=no').then(response => {
      setWeather(response.data)
    })
  }, [])

  return (
    <Container>
      <h1>{weather?.location.name}, {weather?.location.country}</h1>
      <p>{n}, {weather?.location.localtime}</p>
    </Container>
  );
};

export default Location;
