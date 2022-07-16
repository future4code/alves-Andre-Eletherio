import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { goToAdminHomePage, goToListTripsPage } from '../routes/coordinator'
import { ScreenHome } from '../styles/style'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <ScreenHome>
      <Header />
      <h1>Labex</h1>
      <div className="decide">
        <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
      </div>
    </ScreenHome>
  )
}
