/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { currentWeather, weekWeather } from '../../services/weather';

import { BiSearchAlt } from 'react-icons/bi';

import { OtherWeatherDataContext } from '../contexts/OtherWeatherDataContext';

interface Props {
  cityName: string,
  setCityName: any,
  setCurrentWeatherData: any,
}

export const Search = ({
  cityName,
  setCityName,
  setCurrentWeatherData,
}: Props) => {
  const { otherWeatherData, setOtherWeatherData } = useContext(OtherWeatherDataContext);
  console.log('otherWeatherData', otherWeatherData);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await currentWeather.get(`weather?appid=a5e8f0ff6c4539df70bee958dc95fa10&units=metric&q=São Paulo`) as any;
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

  async function handleGetCurrentWeather(event: any) {
    event.preventDefault();
    if (cityName === '') {
      return window.alert('Do not let any field empty');
    }
    try {
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
    // await getWeatherData('Rio de janeiro');

  }


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