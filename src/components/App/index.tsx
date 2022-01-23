import { Button } from '../Button';
import { Search } from '../Search';
import { Home } from '../Home';

import { Container } from './styles';
import GlobalStyles from '../../styles/global';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Home />
    </Container>
  );
}

export default App;

