import axios from 'axios';

export const currentWeather = axios.create({ 
  baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const weekWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
});