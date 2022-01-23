import { CurrentWeather } from '../CurrentWeather';
import { OtherWeatherData } from '../OtherWeatherData';
import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <CurrentWeather />
      <OtherWeatherData />
    </Container>
  )
}