import { Container } from '@material-ui/core'

import AppHeader from './components/AppHeader'
import Notecard from './components/Notecard'

function App() {
  return (
    <Container>
      <AppHeader />
      <Notecard />
    </Container>
  );
}

export default App;
