import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Temp } from './styles';

interface Props {
  isCelsius: boolean,
  setIsCelsius: any
}

export const Header = ({
  isCelsius,
  setIsCelsius
}: Props) => {
  return (
    <Container>
      <h3>Week</h3>
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
    </Container>
  );
}