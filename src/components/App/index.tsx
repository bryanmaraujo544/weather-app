import { Home } from '../Home';

import { Container } from './styles';
import GlobalStyles from '../../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Home />
      </Container>

    </ThemeProvider>
  );
}

export default App;

