/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from 'react';
import { Container } from './styles';
import { currentWeather, weekWeather } from '../../services/weather';

import { BiSearchAlt } from 'react-icons/bi';

import { OtherWeatherDataContext } from '../contexts/OtherWeatherDataContext';

interface Props {
  cityName: string,
  setCityName: any,
  setCurrentWeatherData: any,
  cityNameInLocalStorage: string,
  setCityNameInLocalStorage: any
}

export const Search = ({
  cityName,
  setCityName,
  setCurrentWeatherData,
  cityNameInLocalStorage,
  setCityNameInLocalStorage
}: Props) => {
  const { setOtherWeatherData } = useContext(OtherWeatherDataContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await currentWeather.get(`weather?appid=a5e8f0ff6c4539df70bee958dc95fa10&units=metric&q=${cityNameInLocalStorage === '' ? 'São Paulo' : cityNameInLocalStorage}`) as any;
        setCurrentWeatherData(data);
  
        const lat = data?.coord?.lat;
        const lon = data?.coord?.lon;
        const { data: otherWeatherData } = await weekWeather.get(`onecall?exclude=minutely,hourly&units=metric&appid=a5e8f0ff6c4539df70bee958dc95fa10&lat=${lat}&lon=${lon}`);
        setOtherWeatherData(otherWeatherData);
      } catch(err) {
        console.log({ err });
      }
    })();
  }, []);

  const handleGetCurrentWeather = useCallback(async (event: any) => {
    event.preventDefault();
    if (cityName === '') {
      return window.alert('Do not let any field empty');
    }
    try {
      setCityNameInLocalStorage(cityName);
      const { data } = await currentWeather.get(`weather?appid=a5e8f0ff6c4539df70bee958dc95fa10&units=metric&q=${cityName}`) as any;
      setCurrentWeatherData(data);

      const lat = data?.coord?.lat;
      const lon = data?.coord?.lon;
      const { data: otherWeatherData } = await weekWeather.get(`onecall?exclude=minutely,hourly&units=metric&appid=a5e8f0ff6c4539df70bee958dc95fa10&lat=${lat}&lon=${lon}`);
      setOtherWeatherData(otherWeatherData);
    } catch(err: any) {
      const errMessage = err?.response?.data?.message;
      window.alert(errMessage);
      setCityName('');
    }
  }, [cityName]);


  function handleChange(event: any) {
    setCityName(event.target.value);
  }

  return (
    <Container
      onSubmit={handleGetCurrentWeather}
    >
      <button>
        <BiSearchAlt className="icon" />
      </button>
      <input 
        onChange={handleChange} 
        title="search" 
        value={cityName} 
        placeholder="Search a city..."
      />
    </Container>
    
  )
}