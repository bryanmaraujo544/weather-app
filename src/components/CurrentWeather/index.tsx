import { Container, MainInfos } from './styles';
import { Search } from '../Search';

export const CurrentWeather = () => {
  return (
    <Container>
      <Search />
      <MainInfos>
        <div className="icon">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" />
        </div>
        <h3 className="temperature">
          12
        </h3>
        <p className="day-time">
          <b>Monday</b>, 16:00
        </p>
      </MainInfos>
      'Current Data'
    </Container>
  )
}