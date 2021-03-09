import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import GlobalStyle from './styles/globaStyles';
import { Wrapper } from './styles/pages/app';

function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <CurrentWeather />
      <ForecastList/>
    </Wrapper>
  )
}

export default App;
