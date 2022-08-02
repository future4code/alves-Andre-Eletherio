import { Symbol } from "../../components/Symbol";
import { Screen, Top, Des, Title, Middle, Bottom } from "./Style";
import { useForm } from '../../hooks/useForm'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import { goToFeedPage, goToRegistrationPage } from "../../routes/Coordinator";

export default function LoginPage() {

  const { form, onChange, clean } = useForm({ "email": '', "password": "" })

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/users/login", form
    ).then((res) => {
      localStorage.setItem("token", res.data.token)
      goToFeedPage(navigate)
    }).catch((err) => {
      alert("E-mail ou senha inválidos")
    })
    clean()
  }

  return (
    <Screen>
      <Top>
        <Symbol class={"big"} />
        <Title>LabEddit</Title>
        <Des>O projeto de rede social da Labenu</Des>
      </Top>
      <Middle>
        <form id="my-form" onSubmit={login}>
          <input onChange={onChange} value={form.email} name="email" type="email" placeholder="E-mail" required />
          <input onChange={onChange} value={form.password} name="password" type="password" placeholder="Senha" required />
        </form>
      </Middle>
      <Bottom>
        <button className="continue" form="my-form">Continuar</button>
        <hr className="line" />
        <button onClick={()=> goToRegistrationPage(navigate)} className="create">Crie uma Conta</button>
      </Bottom>
    </Screen>
  )
}
