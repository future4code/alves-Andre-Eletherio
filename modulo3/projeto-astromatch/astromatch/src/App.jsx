import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components'
import { Home } from './components/card/Home';
import { Matches } from './components/card/Matches';
import { Screen, Buttons } from './components/styles/style'

function App() {
  const [page, setPage] = useState('home')

  const choosePage = () => {
    page === 'home' ? setPage('matches') : setPage('home')
  }

  return (
    <Screen>
      {page === 'home' ? <Home choosePage={choosePage} /> : <Matches />}
      <Buttons>
        <button onClick={choosePage}>Mathces</button>
      </Buttons>
    </Screen>
  );
}

export default App;
