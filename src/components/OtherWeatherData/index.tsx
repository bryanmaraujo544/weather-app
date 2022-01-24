import { Header } from '../Header';
import { Container, WeekWeather } from './styles';

import SunIcon from '../../assets/icons/sun/4.png';


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

export const OtherWeatherData = () => {
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
      'OtherWatherdata'
    </Container>
  )
}