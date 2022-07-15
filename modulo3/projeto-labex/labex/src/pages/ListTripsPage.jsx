import {useNavigate} from 'react-router-dom'
import { goToApplicationFormPage } from '../routes/coordinator'
<<<<<<< HEAD
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from '../hooks/useRequestData'
=======
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53

export function ListTripsPage() {
    const navigate = useNavigate()

<<<<<<< HEAD
    const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
    const tripList = trips && trips.trips.map((trip, i)=> <p key={i}>{trip.name}</p>)

=======
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53
    return (
        <section>
            <div>ListTripsPage</div>
            <button onClick={() => goToApplicationFormPage(navigate)}>ApplicationFormPage</button>
<<<<<<< HEAD
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
            {!isLoading && trips && trips.trips.length > 0 && tripList }
            {!isLoading && trips && trips.trips.length === 0  && <p>Não há viagens</p>}
=======
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53
        </section>
    )
}
