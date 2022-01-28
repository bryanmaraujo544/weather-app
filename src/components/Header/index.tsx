import { motion } from 'framer-motion';
import { Container, Temp } from './styles';

import Sun from '../../assets/icons/sun/26.png';
import Moon from '../../assets/icons/moon/10.png';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <Container
      as={motion.header}
      initial= {{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .75 }}
    >
      <h3>Week</h3>
      <motion.button 
        className="find-cities-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/findCities')}
      >
        Find Cities By Weather Status
      </motion.button>
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
          {colorTheme === 'dark' && <img src={Sun} alt="sun-icon" onClick={() => setColorTheme('light')} />}
          {colorTheme === 'light' && <img src={Moon} alt="moon-icon" onClick={() => setColorTheme('dark')} />}
        </div>
      </div>
    </Container>
  );
}