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


  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  var n = weekday[d.getDay()];
  var m = months[d.getMonth()]

  useEffect(() => {
    api.get('https://api.weatherapi.com/v1/current.json?key=dc546a4fbf4d45508cf212117210403&q=Curitiba&aqi=no').then(response => {
      setWeather(response.data)
    })
  }, [])

  return (
    <Container>
      <h1>{weather?.location.name}, {weather?.location.country}</h1>
      <p>{n}, {d.getDate()} {m}</p>
    </Container>
  );
};

export default Location;
