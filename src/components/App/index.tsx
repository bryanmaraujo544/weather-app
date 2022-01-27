import { Home } from '../Home';

import { Container } from './styles';
import GlobalStyles from '../../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function App() {
  const [colorTheme, setColorTheme] = useLocalStorage('color-theme', 'light');
  return (
    <ThemeProvider theme={colorTheme === 'light' ? theme.light : theme.dark}>
      <Container>
        <GlobalStyles />
        <Home 
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;

