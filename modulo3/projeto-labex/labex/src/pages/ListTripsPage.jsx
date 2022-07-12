import {useNavigate} from 'react-router-dom'
import { goToApplicationFormPage } from '../routes/coordinator'

export function ListTripsPage() {
    const navigate = useNavigate()

    return (
        <section>
            <div>ListTripsPage</div>
            <button onClick={() => goToApplicationFormPage(navigate)}>ApplicationFormPage</button>
        </section>
    )
}
