import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToListTripsPage } from '../routes/coordinator'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <section>
    <div>HomePage</div>
    <button onClick={()=> goToListTripsPage(navigate)}>ListTripsPage</button>
    <button onClick={()=> goToAdminHomePage(navigate, false)}>AdmHomePage</button>
    </section>
  )
}
