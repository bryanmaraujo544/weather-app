import { useEffect } from 'react';
import { Header } from '../Header';
import { Container, WeekWeather, TodayHighlights } from './styles';

import { convertUnixToNormalTime } from '../../utils/convertUnixToNormalTime';

import SunIcon from '../../assets/icons/sun/4.png';
import Humidity from '../../assets/icons/humidity.png';
import Pressure from '../../assets/icons/pressure.png';
import Uvi from '../../assets/icons/uvi.png';
import Visibility from '../../assets/icons/visibility.png';
import WindSpeed from '../../assets/icons/wind-speed.png';
import { BsSunset, BsSunrise } from 'react-icons/bs';



const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const highlights = [
  'UV Index',
  'Wind Speed',
  'Humidity',
  'Visibility',
  'Pressure'
]

export const OtherWeatherData = () => {
  // useEffect(() => {
  //   const time = convertUnixToNormalTime(1643061436);
  //   console.log({ time });
  // }, []);

  return (
    <Container>
      <Header />
      <WeekWeather>
        {weekDays.map((day) => (
          <div className="day-weather-card">
            <div className="day">{day}</div>
            <img src={SunIcon} alt="wather-icon" />
            <div className="temperature-min-max">
              <p className="max">15°</p>
              <div className="min">3°</div>
            </div>
          </div>
        ))}
      </WeekWeather>
      <TodayHighlights>
        <h3 className="title">Today's Highlights</h3>
        <div className="hightlights">
            <div className="hightlight-card">
              <p className="highlight-title">UV Index</p>
              <div className="value">5</div>
              <img src={Uvi} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Wind Speed</p>
              <div className="value">5</div>
              <img src={WindSpeed} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Humidity</p>
              <div className="value">12<sup>%</sup></div>
              <img src={Humidity} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Visibility</p>
              <div className="value">5.2<sub>km</sub></div>
              <img src={Visibility} alt="pressure-icon"/>
            </div>
            
            <div className="hightlight-card">
              <p className="highlight-title">Pressure</p>
              <div className="value">1014</div>
              <img src={Pressure} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card sun">
              <p className="highlight-title">Sunrise & Sunset</p>
              <div>
                <div className="sun-infos">
                  <span className="icon-container">
                    <BsSunrise className="icon" />
                  </span>
                  <p className="time">6:35</p>
                </div>
                <div className="sun-infos">
                  <span className="icon-container">
                    <BsSunset className="icon" />
                  </span>
                  <p className="time">18:23</p>
                </div>
              </div>
            </div>
        </div>
      </TodayHighlights>
    </Container>
  )
}