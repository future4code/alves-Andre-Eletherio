import { goToAdminHomePage } from "../routes/coordinator"
import {useNavigate} from 'react-router-dom'

export function LoginPage() {
    const navigate = useNavigate()
    return (
        <section>
            <div>LoginPage</div>
            <button onClick={()=> goToAdminHomePage(navigate, true)}>AdmHomePage</button>
        </section>
    )
}
