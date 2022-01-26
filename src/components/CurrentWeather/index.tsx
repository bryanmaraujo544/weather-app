import { Container, MainInfos, OtherWeatherInfos, CityInfos } from './styles';
import { Search } from '../Search';

import SunIcon from '../../assets/icons/sun/4.png';
import Cloud from '../../assets/icons/cloud/35.png';
import Rain from '../../assets/icons/rain/39.png';

import { getCityImageUrl } from '../../services/unsplash';
import { useEffect, useState } from 'react';
import { convertUnixToNormalTime } from '../../utils/convertUnixToNormalTime';

export const CurrentWeather = () => {
  const [cityImageUrl, setCityImageUrl] = useState('');

  const [cityName, setCityName] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState({} as any);

  const { formattedTime, day } = convertUnixToNormalTime(currentWeatherData.dt, currentWeatherData.timezone)
  console.log({ currentWeatherData });

  useEffect(() => {
    handleSetCityImageUrl('Rio De Janeiro');
  }, []);
  
  async function handleSetCityImageUrl(cityName: string) {
    const url = await getCityImageUrl(cityName);
    setCityImageUrl(url);
  }

  return (
    <Container>
      <Search 
        cityName={cityName}
        setCityName={setCityName}
        setCurrentWeatherData={setCurrentWeatherData}
      />
      <MainInfos>
        <div className="icon">
          <img src={SunIcon} alt="weather-icon" />
        </div>
        <h3 className="temperature">
          {currentWeatherData?.main?.temp} <sup>°C</sup>
        </h3>
        <p className="day-time">
          <b>{day},</b> {formattedTime}
        </p>
      </MainInfos>
      <hr></hr>
      <OtherWeatherInfos>
        <div>
          <img src={Cloud} alt="cloud-icon" />
          <p className="status-message">Mostly Cloudy</p>
        </div>
        <div>
          <img src={Rain} alt="cloud-icon" />
          <p className="status-message">Rain - 30%</p>
        </div>
        <CityInfos>
          <img src={cityImageUrl || ''} alt="city-background" className="city-bg" />
          <p className="city-name">Rio de Janeiro, RJ</p>
        </CityInfos>
      </OtherWeatherInfos>
    </Container>
  )
}