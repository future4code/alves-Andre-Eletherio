<<<<<<< HEAD
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
=======
import {useNavigate} from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../routes/coordinator'

export function AdminHomePage() {
    const navigate = useNavigate()
    return (
        <section>
            <div>AdminHomePage</div>
            <button onClick={()=> goToCreateTripPage(navigate)}>CreateTrip</button>
            <button onClick={()=> goToTripDetailsPage(navigate, 7)}>Details</button>
>>>>>>> b05d755cb51d47a4ae9c71f31d20b5f4bf99cc53
        </section>
    )
}
