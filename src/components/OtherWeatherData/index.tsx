import { useState, useContext, useEffect } from 'react';
import { Header } from '../Header';
import { Container, WeekWeather, TodayHighlights } from './styles';

import Humidity from '../../assets/icons/humidity.png';
import Pressure from '../../assets/icons/pressure.png';
import Uvi from '../../assets/icons/uvi.png';
import Temperature from '../../assets/icons/temperature.png';
import WindSpeed from '../../assets/icons/wind-speed.png';
import { BsSunset, BsSunrise } from 'react-icons/bs';

import { OtherWeatherDataContext } from '../contexts/OtherWeatherDataContext';

import { convertUnixToDate } from '../../utils/convertUnixToDate';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const highlights = [
  'UV Index',
  'Wind Speed',
  'Humidity',
  'Visibility',
  'Pressure'
]

export const OtherWeatherData = () => {
  const { otherWeatherData } = useContext(OtherWeatherDataContext);
  const [weekWeatherData, setWeekWeatherData] = useState([]);

  useEffect(() => {
    if (otherWeatherData?.daily){
      // Grabbing the week weather information
      const weekInfos = otherWeatherData.daily;

      // And returning all the weather object with a new propertie Day
      // That will be used to set the title of week card; 
      
      const newWeekInfos = weekInfos.map((dayInfo: any) => {
        const { day } =  convertUnixToDate(dayInfo.dt);
        return ({
          ...dayInfo,
          day
        })
      }).slice(1); // I am taking out the first index. Because is the current day

      setWeekWeatherData(newWeekInfos);
    }
  }, [otherWeatherData]);

  // Function that get a date in unix format and return an hour and minute time
  function getDateInString(unix: number) {
    const { date } = convertUnixToDate(unix);

    return date.getHours() + ':' + date.getMinutes(); 
  }

  return (
    <Container>
      <Header />
      <WeekWeather>
        {weekWeatherData.map((day: any) => (
          <div className="day-weather-card">
            <div className="day">{day.day}</div>
            <img src={getWeatherIcon(day?.weather[0]?.icon)} alt="wather-icon" />
            <div className="temperature-min-max">
              <p className="max">{day.temp.max}°</p>
              <div className="min">{day.temp.min}3°</div>
            </div>
          </div>
        ))}
      </WeekWeather>
      <TodayHighlights>
        <h3 className="title">Today's Highlights</h3>
        <div className="hightlights">
            <div className="hightlight-card">
              <p className="highlight-title">UV Index</p>
              <div className="value">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.uvi : 0}</div>
              <img src={Uvi} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Wind Speed</p>
              <div className="value">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.wind_speed : 0}<b>km/h</b></div>
              <img src={WindSpeed} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Humidity</p>
              <div className="value">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.humidity : 0}<b>%</b></div>
              <img src={Humidity} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card">
              <p className="highlight-title">Min & Max</p>
              <div className="min-max">
                <p className="temp">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.temp?.max : 0}°</p>
                <p className="temp">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.temp?.min : 0}°</p>
              </div>
              <img src={Temperature} alt="pressure-icon"/>
            </div>
            
            <div className="hightlight-card">
              <p className="highlight-title">Pressure</p>
              <div className="value">{otherWeatherData?.daily ? otherWeatherData?.daily[0]?.pressure : 0}</div>
              <img src={Pressure} alt="pressure-icon"/>
            </div>

            <div className="hightlight-card sun">
              <p className="highlight-title">Sunrise & Sunset</p>
              <div>
                <div className="sun-infos">
                  <span className="icon-container">
                    <BsSunrise className="icon" />
                  </span>
                  <p className="time">{otherWeatherData?.daily ? (
                    getDateInString(otherWeatherData?.daily[0]?.sunrise)
                  ) : 0}</p>
                </div>
                <div className="sun-infos">
                  <span className="icon-container">
                    <BsSunset className="icon" />
                  </span>
                  <p className="time">{otherWeatherData?.daily ? (
                    getDateInString(otherWeatherData?.daily[0]?.sunset)
                  ) : 0}</p>
                </div>
              </div>
            </div>
        </div>
      </TodayHighlights>
    </Container>
  )
}