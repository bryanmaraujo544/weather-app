import React from 'react';
import { Container } from './styles';
import { currentWeather } from '../../services/weather';

import { BiSearchAlt } from 'react-icons/bi';

interface Props {
  cityName: string,
  setCityName: any,
  setCurrentWeatherData: any
}

export const Search = ({
  cityName,
  setCityName,
  setCurrentWeatherData,
}: Props) => {
  async function handleGetCurrentWeather(event: any) {
    event.preventDefault();

    try {
      const { data } = await currentWeather.get(`weather?appid=a5e8f0ff6c4539df70bee958dc95fa10&units=metric&q=${cityName}`) as any;
      console.log('data');
      setCurrentWeatherData(data);
    } catch(err) {
      console.log({ err });
    }
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