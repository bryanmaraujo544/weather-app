import Sun from '../assets/icons/sun/26.png';
import SunFewClouds from '../assets/icons/sun/4.png';
import SunBrokenClouds from '../assets/icons/sun/13.png';
import SunRain from '../assets/icons/sun/8.png';
import SunThunderstorm from '../assets/icons/sun/30.png';

import Moon from '../assets/icons/moon/10.png';
import MoonFewClouds from '../assets/icons/moon/15.png';
import MoonBrokenClouds from '../assets/icons/moon/41.png';
import MoonRain from '../assets/icons/moon/1.png';
import MoonThunderstorm from '../assets/icons/moon/20.png';

import Thunderstorm from '../assets/icons/cloud/12.png';
import Cloud from '../assets/icons/cloud/35.png';
import Mist from '../assets/icons/snow/36.png';
import CloudRain from '../assets/icons/cloud/7.png';
import Snow from '../assets/icons/cloud/18.png';



export const getWeatherIcon = (iconId: string) => {
  switch(iconId) {
    case '01d':
      return Sun;
    case '02d':
      return SunFewClouds;
    case '03d':
      return Cloud;
    case '04d':
      return SunBrokenClouds;
    case '09d':
      return CloudRain;
    case '10d':
      return SunRain;
    case '11d':
      return SunThunderstorm;
    case '13d':
      return Snow;
    case '50d':
      return Mist;
    case '01n':
      return Moon;
    case '02n':
      return MoonFewClouds;
    case '03n':
      return Cloud;
    case '04n':
      return MoonBrokenClouds;
    case '09n':
      return CloudRain;
    case '10n':
      return MoonRain;
    case '11n':
      return MoonThunderstorm;
    case '13n':
      return Snow;
    case '50n':
      return Mist;
    
  }
}