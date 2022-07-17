import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { BASE_URL } from "../constants/BASE_URL"
import { goToAdminHomePage } from '../routes/coordinator'
import { LoginStyle, Screen } from "../styles/style"

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassord] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassord = (e) => {
        setPassord(e.target.value)
    }

    const useLogin = (e) => {
        e.preventDefault()
        const body = {
            "email": email,
            "password": password
        }
        axios.post(
            BASE_URL + "/login", body
        ).then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLogged(true)
            goToAdminHomePage(navigate)
        }).catch((err) => alert("Usuário/Senha incorretos."))
        return;
    }

    return (
        <Screen>
            <Header isLogged={isLogged} />
            <LoginStyle>
                <section className="card">
                    <h1>Fazer Login</h1>
                    <form onSubmit={useLogin} className="form">
                        <input onChange={onChangeEmail} type="text" placeholder="email" />
                        <input onChange={onChangePassord} type="password" placeholder="Password" />
                        <button>Entrar</button>
                    </form>
                </section>
            </LoginStyle>
        </Screen>
    )
}
