import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import Location from './components/Location';
import SearchBar from './components/SearchBar';
import GlobalStyle from './styles/globaStyles';
import { Wrapper } from './styles/pages/app';

function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <SearchBar />
      <Location />
      <CurrentWeather />
      <ForecastList/>
    </Wrapper>
  )
}

export default App;
