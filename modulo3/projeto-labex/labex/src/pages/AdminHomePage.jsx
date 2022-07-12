import {useNavigate} from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../routes/coordinator'

export function AdminHomePage() {
    const navigate = useNavigate()
    return (
        <section>
            <div>AdminHomePage</div>
            <button onClick={()=> goToCreateTripPage(navigate)}>CreateTrip</button>
            <button onClick={()=> goToTripDetailsPage(navigate, 7)}>Details</button>
        </section>
    )
}
