import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/coordinator"
import { HeaderStyle } from "../styles/style"
// Fazer o header.
// Fazer o site do jeito que estava planejando no início mesmo.
export function Header(props) {
    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    useEffect(()=> {
        localStorage.getItem("token") === null ? setIsLogged(false) : setIsLogged(true)
    }, [props.isLogged])

    const clear = () => {
        localStorage.clear()
    }

    return (
        <HeaderStyle>
            <h1>Labex</h1>
            {isLogged ?<div><button onClick={() => goToAdminHomePage(navigate, false)}>Área de Admin</button><p>Logout</p></div> : <p>Login</p>}
        </HeaderStyle>
    )
}