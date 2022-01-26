import { Container, MainInfos, OtherWeatherInfos, CityInfos } from './styles';
import { Search } from '../Search';

// import SunIcon from '../../assets/icons/sun/4.png';
import Cloud from '../../assets/icons/cloud/35.png';
import Wind from '../../assets/icons/wind-speed.png';

import { getCityImageUrl } from '../../services/unsplash';
import { useEffect, useState } from 'react';
import { convertUnixToNormalTime } from '../../utils/convertUnixToNormalTime';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

export const CurrentWeather = () => {
  const SunIcon = getWeatherIcon('50n');


  const [cityImageUrl, setCityImageUrl] = useState('');

  const [cityName, setCityName] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState({} as any);
  console.log({ currentWeatherData });

  const { formattedTime, day } = convertUnixToNormalTime(currentWeatherData.dt, currentWeatherData.timezone);

  useEffect(() => {
    handleSetCityImageUrl(currentWeatherData.name);
  }, [currentWeatherData]);
  
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
          <img src={getWeatherIcon(currentWeatherData?.weather[0]?.icon)} alt="weather-icon" />
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
          <p className="status-message">Clouds: {currentWeatherData?.clouds?.all}%</p>
        </div>
        <div>
          <img src={Wind} alt="cloud-icon" />
          <p className="status-message">Wind - {currentWeatherData?.wind?.speed}<sub>km/h</sub></p>
        </div>
        <CityInfos>
          <img src={cityImageUrl || ''} alt="city-background" className="city-bg" />
          <p className="city-name">{currentWeatherData?.name}, {currentWeatherData?.sys?.country}</p>
        </CityInfos>
      </OtherWeatherInfos>
    </Container>
  )
}