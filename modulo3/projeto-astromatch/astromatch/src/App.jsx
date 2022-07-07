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

  const resetAll = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:andre-eletherio-alves/clear"
    ).then((res) => {
      console.log(res)
    }).catch((err) => console.log(err.response))
  }

  return (
    <Screen>
      {page === 'home' ? <Home choosePage={choosePage} /> : <Matches />}
      <Buttons>
        <button onClick={choosePage}>Mathces</button>
        <button onClick={resetAll}>Reset</button>
      </Buttons>
    </Screen>
  );
}

export default App;
