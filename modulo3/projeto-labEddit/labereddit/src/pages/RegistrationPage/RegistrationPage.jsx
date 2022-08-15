import React from 'react'
import Header from '../../components/Header'
import { Bottom, Check, Contracts, Inputs, Register, Screen, Welcome } from './Style'
import { useForm } from '../../hooks/useForm'
import { BASE_URL } from '../../constants/BASE_URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from '../../routes/Coordinator'

export default function RegistrationPage() {

  const { form, onChange, clean } = useForm({ "username": "", "email": "", "password": "" })

  const navigate = useNavigate()

  const register = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/users/signup", form
    ).then((res) => {
      alert("Registrado")
      localStorage.setItem("token", res.data.token)
      goToFeedPage(navigate)
    }).catch((err) => alert(err.response.data))
  }

  return (
    <Screen>
      <Header onClick={() => goToLoginPage(navigate)} login="Entrar" />
      <Welcome>Olá, boas vindas ao LabEddit ;)</Welcome>
      <Inputs>
        <form id='my-form' onSubmit={register}>
          <input onChange={onChange} name='username' value={form.username} type="text" placeholder='Nome de usuário' required />
          <input onChange={onChange} name='email' value={form.email} type="email" placeholder='E-mail' required />
          <input pattern='^.{8,}' title='Mímimo de 8 caracteres exigido' onChange={onChange} name='password' value={form.password} type="password" placeholder='Senha' required />
        </form>
      </Inputs>
      <Bottom>
        <Contracts>Ao continuar, você concorda  com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span></Contracts>
        <Check><input type="checkbox" required form='my-form' /><p>Eu concordo em receber emails sobre coisas legais no Labeddit</p></Check>
      </Bottom>
      <Register form="my-form">Cadastrar</Register>
    </Screen>
  )
}
