import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Temp } from './styles';

import Sun from '../../assets/icons/sun/26.png';
import Moon from '../../assets/icons/moon/10.png';

interface Props {
  isCelsius: boolean,
  setIsCelsius: any,
  colorTheme: string,
  setColorTheme: any,
}

export const Header = ({
  isCelsius,
  setIsCelsius,
  colorTheme,
  setColorTheme
}: Props) => {
  return (
    <Container>
      <h3>Week</h3>
      <div className="right-actions">
        <div className="temp-measurements">
          <Temp isActive={isCelsius} 
            onClick={() => setIsCelsius(true)}
          >
            {isCelsius && <motion.div className="bg" layoutId="bg"></motion.div>}
            <p>°C</p>  
          </Temp>
          <Temp 
            isActive={!isCelsius} 
            onClick={() => setIsCelsius(false)}
          >
            {!isCelsius && <motion.div className="bg" layoutId="bg"></motion.div>}
            <p>°F</p> 
          </Temp>
        </div>
        <div className="dark-mode-container">
          {colorTheme === 'light' && <img src={Sun} alt="sun-icon" onClick={() => setColorTheme('dark')} />}
          {colorTheme === 'dark' && <img src={Moon} alt="moon-icon" onClick={() => setColorTheme('light')} />}
        </div>
      </div>
    </Container>
  );
}