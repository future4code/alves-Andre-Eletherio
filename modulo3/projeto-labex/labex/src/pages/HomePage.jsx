import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from '../constants/BASE_URL'
import { Screen, HomePageStyle } from '../styles/style'
import { CardsHome } from '../components/CardsHome'

export function HomePage() {
  const navigate = useNavigate()

  const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
  const tripList = trips && trips.trips.map((trip, i) => <CardsHome trip={trip} key={i}/>)

  return (
    <Screen>
      <Header />
      <HomePageStyle>
        <h1 style={{color: "#f6f9ff"}} className='title'>Lista de Viagens:</h1>
        <div className="cardsSection">
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
          {!isLoading && trips && trips.trips.length > 0 && tripList}
          {!isLoading && trips && trips.trips.length === 0 && <p>Não há viagens</p>}
        </div>
      </HomePageStyle>
    </Screen>
  )
}
