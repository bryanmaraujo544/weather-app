/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from 'react';
import { Container } from './styles';
import { currentWeather, weekWeather } from '../../services/weather';

import { BiSearchAlt } from 'react-icons/bi';

import { OtherWeatherDataContext } from '../contexts/OtherWeatherDataContext';
import { motion } from 'framer-motion';

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
      const city = cityNameInLocalStorage === '' ? 'São Paulo' : cityNameInLocalStorage;
      await getWeatherData(city);
    })();
  }, []);

  const handleGetCurrentWeather = useCallback(async (event: any) => {
    event.preventDefault();
    if (cityName === '') {
      return window.alert('Do not let any field empty');
    }
    await getWeatherData(cityName);
  }, [cityName]);

  async function getWeatherData(city: string) {
    try {
      const { data } = await currentWeather.get(`weather?appid=a5e8f0ff6c4539df70bee958dc95fa10&units=metric&q=${city}`) as any;
      setCurrentWeatherData(data);
      
      const lat = data?.coord?.lat;
      const lon = data?.coord?.lon;
      const { data: otherWeatherData } = await weekWeather.get(`onecall?exclude=minutely,hourly&units=metric&appid=a5e8f0ff6c4539df70bee958dc95fa10&lat=${lat}&lon=${lon}`);
      setCityNameInLocalStorage(cityName);
      setOtherWeatherData(otherWeatherData);
    } catch(err: any) {
      const errMessage = err?.response?.data?.message;
      window.alert(errMessage);
    } finally {
      setCityName('');
    }
  }

  function handleChange(event: any) {
    setCityName(event.target.value);
  }

  return (
    <Container
      onSubmit={handleGetCurrentWeather}
      data-testid="form"
      as={motion.form}
      initial= {{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .75 }}
    >
      <button>
        <BiSearchAlt className="icon" />
      </button>
      <input 
        onChange={handleChange} 
        data-testid="input"
        value={cityName} 
        placeholder="Search a city..."
      />
    </Container>
  )
}