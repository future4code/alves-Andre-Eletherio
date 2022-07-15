import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from '../hooks/useRequestData'

export function AdminHomePage() {
    const navigate = useNavigate()

    const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
    const tripList = trips && trips.trips.map((trip, i) => <p key={i} onClick={()=> goToTripDetailsPage(navigate, trip.id)}>{trip.name}</p>)

    return (
        <section>
            <div>AdminHomePage</div>
            <button onClick={() => goToCreateTripPage(navigate)}>CreateTrip</button>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
            {!isLoading && trips && trips.trips.length > 0 && tripList}
            {!isLoading && trips && trips.trips.length === 0 && <p>Não há viagens</p>}
        </section>
    )
}
