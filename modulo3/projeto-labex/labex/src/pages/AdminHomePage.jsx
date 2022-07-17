import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from '../hooks/useRequestData'
import axios from 'axios'
import { Header } from '../components/Header'
import { useForm } from '../hooks/useForm'
import { AdimHomePage, AdminPageStyle, CardAdm, CreateTrip, Screen } from '../styles/style'
import { useEffect, useState } from 'react'

export function AdminHomePage() {
  const navigate = useNavigate()
  const [date, setDate] =  useState("")

  const deleteTrip = (tripId) => {
    const token = localStorage.getItem("token")
    axios.delete(
      BASE_URL + "/trips/" + tripId, {
      headers: {
        "auth": token
      }
    }
    ).then((res) => refresh()).catch((err) => console.log(err.response))
  }

  const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
  const tripList = trips && trips.trips.map((trip, i) => {
    return (
      <CardAdm key={i} className="transformScale">
        <div className="click" onClick={()=> goToTripDetailsPage(navigate, trip.id)}>
          <p>{trip.name}</p>
        </div>
        <button className='buttonHover' onClick={() => deleteTrip(trip.id)}>Delete</button>
      </CardAdm>
    )
  })

  // Parte CreateTip

  const { form, onChange } = useForm({ "name": "", "planet": "", "date": "", "description": "", "durationInDays": Infinity })

  const create = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    axios.post(
      BASE_URL + "/trips", form, {
      headers: {
        "Content-Type": "application/json",
        "auth": token
      }
    }
    ).then((res) => {
      alert("Viagem criada com sucesso!")
      refresh()
    }).catch((err) => console.log(err))
  }

  // Está deletando, mas não atualizando a página

  const refresh = () => {
    window.location.reload();
  }

  return (
    <Screen>
      <Header />
      <AdminPageStyle>
        <AdimHomePage>
          <div className="title">
            <h1>Viagens</h1>
          </div>
          <div className="cards">
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
            {!isLoading && trips && trips.trips.length > 0 && tripList}
            {!isLoading && trips && trips.trips.length === 0 && <p>Não há viagens</p>}
          </div>
        </AdimHomePage>
        <CreateTrip>
          <div className="title">
            <h1>Criar Viagem</h1>
          </div>
          <form onSubmit={create}>
            <input required pattern='^.{5,24}' title='O nome da viagem deve ter entre 5 e 20 caracteres.' placeholder='Nome da Viagem' name="name" onChange={onChange} value={form.name} />
            <select name="planet" onChange={onChange} required >
              <option disabled value={""} selected >Selecione o Planeta</option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Jupter">Jupter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
              <option value="Plutão">Plutão (não é planeta)</option>
            </select>
            <input required min={date} name="date" onChange={onChange} value={form.date} type="date" />
            <input required placeholder='Descrição' name="description" onChange={onChange} value={form.description} />
            <input required placeholder='Duração em dias' name="durationInDays" onChange={onChange} value={form.durationInDays} type="number" />
            <button className="buttonHover">Criar</button>
          </form>
        </CreateTrip>
      </AdminPageStyle>
    </Screen>
  )
}
