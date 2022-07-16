import {useNavigate} from 'react-router-dom'
import { goToApplicationFormPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from '../hooks/useRequestData'
import { ScrrenListTrips } from '../styles/style'
import { Header } from '../components/Header'

export function ListTripsPage() {
    const navigate = useNavigate()

    const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
    const tripList = trips && trips.trips.map((trip, i)=> <p onClick={() => goToApplicationFormPage(navigate, trip)} key={i}>{trip.name}</p>)

    return (
        <ScrrenListTrips>
            <Header />
            <h1>Lista de Viagens</h1>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
            {!isLoading && trips && trips.trips.length > 0 && tripList }
            {!isLoading && trips && trips.trips.length === 0  && <p>Não há viagens</p>}
        </ScrrenListTrips>
    )
}
