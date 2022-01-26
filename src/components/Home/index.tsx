import { CurrentWeather } from '../CurrentWeather';
import { OtherWeatherData } from '../OtherWeatherData';
import { Container } from './styles';
import { OtherWeatherDataProvider } from '../contexts/OtherWeatherDataContext';

export const Home = () => {
  return (
    <Container>
      <OtherWeatherDataProvider>
        <CurrentWeather />
        <OtherWeatherData />
      </OtherWeatherDataProvider>
    </Container>
  )
}