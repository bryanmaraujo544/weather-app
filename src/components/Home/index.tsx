import { useState } from 'react';

import { CurrentWeather } from '../CurrentWeather';
import { OtherWeatherData } from '../OtherWeatherData';
import { Container } from './styles';
import { OtherWeatherDataProvider } from '../contexts/OtherWeatherDataContext';

interface Props {
  colorTheme: string,
  setColorTheme: any
}

export const Home = ({
  colorTheme,
  setColorTheme,
}: Props) => {
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
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </OtherWeatherDataProvider>
    </Container>
  )
}