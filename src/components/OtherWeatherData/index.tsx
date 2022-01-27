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
import { convertCelsiusToFahr } from '../../utils/convertCelsiusToFahr';
import { motion } from 'framer-motion';

interface Props {
  isCelsius: boolean,
  setIsCelsius: any,
  colorTheme: string,
  setColorTheme: any
}

export const OtherWeatherData = ({
  isCelsius,
  setIsCelsius,
  colorTheme,
  setColorTheme
}: Props) => {
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

    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes; 
  }

  return (
    <Container>
      <Header
        isCelsius={isCelsius}
        setIsCelsius={setIsCelsius}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
      <WeekWeather>
        {weekWeatherData.map((day: any) => (
          <motion.div 
            className="day-weather-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="day">{day.day}</div>
            <img src={getWeatherIcon(day?.weather[0]?.icon)} alt="wather-icon" />
            <div className="temperature-min-max">
              <p className="max">{isCelsius ? (
                Math.round(day.temp.max)
              ) : (
                Math.round(convertCelsiusToFahr(day.temp.max))
              )}°</p>
              <div className="min">{isCelsius ? (
                Math.round(day.temp.min)
              ) : (
                Math.round(convertCelsiusToFahr(day.temp.min))
              )}°</div>
            </div>
          </motion.div>
        ))}
      </WeekWeather>
      <TodayHighlights
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .75 }}
      >
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
                <p className="temp">{otherWeatherData?.daily ? isCelsius ? (
                  Math.round(otherWeatherData?.daily[0]?.temp?.max)
                ) : (
                  Math.round(convertCelsiusToFahr(otherWeatherData?.daily[0]?.temp?.max))
                ) : 0}°</p>
                <p className="temp">{otherWeatherData?.daily ? isCelsius ? (
                  Math.round(otherWeatherData?.daily[0]?.temp?.min)
                ) : (
                  Math.round(convertCelsiusToFahr(otherWeatherData?.daily[0]?.temp?.min))
                ) : 0}°</p>
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