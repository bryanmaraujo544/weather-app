import { useState } from 'react';

import { Container, Temp } from './styles';

export const Header = () => {
  const [tempActive, setTempActive] = useState('celsius');
  return (
    <Container>
      <h3>Week</h3>
      <div className="temp-measurements">
        <Temp isActive={tempActive === 'celsius'}>°C</Temp>
        <Temp isActive={tempActive === 'fahren'}>°F</Temp>
      </div>
    </Container>
  );
}