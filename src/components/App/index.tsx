import { Home } from '../../pages/Home';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/global';
import { Container } from './styles';
import { theme } from '../../styles/theme';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindCities } from '../../pages/FindCities';

function App() {
  const [colorTheme, setColorTheme] = useLocalStorage('color-theme', 'light');
  
  return (
    <ThemeProvider theme={colorTheme === 'light' ? theme.light : theme.dark}>
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home colorTheme={colorTheme} setColorTheme={setColorTheme}/>}/>
            <Route path="/findCities" element={<FindCities />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

