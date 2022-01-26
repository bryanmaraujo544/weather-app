import { useState } from 'react';

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
        >°C</Temp>
        <Temp 
          isActive={!isCelsius} 
          onClick={() => setIsCelsius(false)}
        >°F</Temp>
      </div>
    </Container>
  );
}