import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage, goToHomePage, goToListTripsPage, goToLoginPage } from "../routes/coordinator"
import { HeaderStyle } from "../styles/style"

export function Header(props) {
    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    useEffect(()=> {
        localStorage.getItem("token") === null ? setIsLogged(false) : setIsLogged(true)
    }, [props.isLogged])

    const logout = () => {
        localStorage.clear()
        setIsLogged(false)
        goToHomePage(navigate)
    }

    return (
        <HeaderStyle>
            <h1 onClick={()=> goToHomePage(navigate)}>Labex</h1>
            {isLogged ?<div> <button className="buttonHover" onClick={()=> goToHomePage(navigate)}>Viagens</button> <button className="buttonHover" onClick={() => goToAdminHomePage(navigate, false)}>Área de Admin</button> <button className="buttonHover" onClick={logout}>Logout</button></div> : <div> <button className="buttonHover" onClick={()=> goToHomePage(navigate)}>Viagens</button> <button className="buttonHover" onClick={() => goToAdminHomePage(navigate, false)}>Área de Admin</button></div>}
        </HeaderStyle>
    )
}