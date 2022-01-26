import axios from 'axios';

export const currentWeather = axios.create({ 
  baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const weekWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=a5e8f0ff6c4539df70bee958dc95fa10'
});