import React, {useState} from 'react';
import { GlobalStyle } from './components/Style.js'
import { Container, Screen } from './components/Style'
import InitialScreen from './pages/InitialScreen'
import MatchesScreen from './pages/MatchesScreen'

function App() {
  const [changeScreen, setChangeScreen] = useState('Initial')

  const screen = (param) => {
    setChangeScreen(param)
  } 

  return (
    <Container>
      <GlobalStyle />
      <Screen>
        {changeScreen === "Initial" ? <InitialScreen Chat={screen} />: <MatchesScreen Matches={screen} />}
      </Screen>
    </Container>
  );
}

export default App;
