import { useState } from 'react';

import { CurrentWeather } from '../CurrentWeather';
import { OtherWeatherData } from '../OtherWeatherData';
import { Container } from './styles';
import { OtherWeatherDataProvider } from '../contexts/OtherWeatherDataContext';

export const Home = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  return (
    <Container>
      <OtherWeatherDataProvider>
        <CurrentWeather 
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
        />
        <OtherWeatherData 
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
        />
      </OtherWeatherDataProvider>
    </Container>
  )
}