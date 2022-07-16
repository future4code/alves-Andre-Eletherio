import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from '../hooks/useRequestData'
import axios from 'axios'
import { Header } from '../components/Header'
import { useForm } from '../hooks/useForm'

export function AdminHomePage() {
  const navigate = useNavigate()

  const deleteTrip = (tripId) => {
    const token = localStorage.getItem("token")
    axios.delete(
      BASE_URL + "/trips/" + tripId, {
      headers: {
        "auth": token
      }
    }
    ).then((res) => console.log(res)).catch((err) => console.log(err.response))
  }

  const [trips, isLoading, error] = useRequestData(BASE_URL + "/trips")
  const tripList = trips && trips.trips.map((trip, i) => {
    return (
      <div key={i}>
        <p onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</p>
        <button onClick={() => deleteTrip(trip.id)}>Delete</button>
      </div>
    )
  })

  // Parte CreateTip

  const { form, onChange } = useForm({ "name": "", "planet": "", "date": "", "description": "", "durationInDays": 50 })

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
    ).then((res) => alert("Viagem criada com sucesso!")).catch((err) => console.log(err))
  }

  // Está deletando, mas não atualizando a página

  return (
    <section>
      <section className="adimHomePage">
        <Header />
        <div>AdminHomePage</div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && !trips && <p>Ocorreu um erro</p>}
        {!isLoading && trips && trips.trips.length > 0 && tripList}
        {!isLoading && trips && trips.trips.length === 0 && <p>Não há viagens</p>}
      </section>
      <section className="createTrip">
        <h1>Criar Viagem</h1>
        <form onSubmit={create}>
          <input name="name" onChange={onChange} value={form.name} />
          <select name="planet" onChange={onChange}>
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
          <input name="date" onChange={onChange} value={form.date} type="date" />
          <input name="description" onChange={onChange} value={form.description} />
          <input name="durationInDays" onChange={onChange} value={form.durationInDays} type="number" />
          <button>Criar</button>
        </form>
      </section>
    </section>
  )
}
