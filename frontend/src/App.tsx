import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/forecastlist';
import GlobalStyle from './styles/globaStyles';



function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="wrap">
          <CurrentWeather />
          <ForecastList/>
      </div>
    </>
  )
}

export default App;
