import React from 'react';
import { Container} from './styles';

import { TiWeatherCloudy, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny } from 'react-icons/ti'


const ForecastList: React.FC = () => {
  return (
    <Container>
      <h1>Forecast</h1>
      <div className="grid-container">
        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>

          <TiWeatherCloudy
            size={30}
            fill="white"
          />

          <h2>41º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherNight
            size={30}
            fill="white"
          />

          <h2>16º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherPartlySunny
            size={30}
            fill="white"
          />

          <h2>21º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherShower
            size={30}
            fill="white"
          />

          <h2>27º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherSnow
            size={30}
            fill="white"
          />

          <h2>34º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherStormy
            size={30}
            fill="white"
          />

          <h2>24º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherSunny
            size={30}
            fill="white"
          />

          <h2>14º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherShower
            size={30}
            fill="white"
          />

          <h2>44º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherShower
            size={30}
            fill="white"
          />
          <h2>12º</h2>
        </div>

        <div>
          <div>
            <h3>04.01</h3>
            <h3>6:00</h3>
          </div>
          <TiWeatherShower
            size={30}
            fill="white"
          />
          <h2>74º</h2>
        </div>
      </div>
    </Container>
  );
};

export default ForecastList;
