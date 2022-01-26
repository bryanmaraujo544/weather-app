import { Container, MainInfos, OtherWeatherInfos, CityInfos } from './styles';
import { Search } from '../Search';

// import SunIcon from '../../assets/icons/sun/4.png';
import Cloud from '../../assets/icons/cloud/35.png';
import Wind from '../../assets/icons/wind-speed.png';

import { getCityImageUrl } from '../../services/unsplash';
import { useEffect, useState } from 'react';
import { getUTCDate } from '../../utils/getUTCDate';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

export const CurrentWeather = () => {
  const [cityImageUrl, setCityImageUrl] = useState('');

  const [cityName, setCityName] = useState(''); // State that will be used to search city's weather information
  const [currentWeatherData, setCurrentWeatherData] = useState({} as any); // The object that gonna contains all the curreant weather informations of the city
  const [mainWeatherIcon, setMainWeatherIcon] = useState(Cloud); // The Icon tha will changes every time a new city is searched

  const { formattedTime, day } = getUTCDate(currentWeatherData.timezone); // Here I am grabbin the day and time of that city

  useEffect(() => {
    handleSetCityImageUrl(currentWeatherData?.name);

    const icon = !!currentWeatherData.weather ? getWeatherIcon(currentWeatherData?.weather[0]?.icon) : Cloud;
    setMainWeatherIcon(icon || Cloud);
  }, [currentWeatherData]);
  
  async function handleSetCityImageUrl(cityName: string) {
    const url = await getCityImageUrl(cityName || 'Rio de Janeiro');
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
            <img src={mainWeatherIcon} alt="weather-icon" />
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