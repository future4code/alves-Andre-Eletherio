import { useForm } from "../hooks/useForm"
import {BASE_URL} from '../constants/BASE_URL'
import axios from 'axios'
import { Header } from "../components/Header"

export function CreateTripPage() {
  
  const {form, onChange} = useForm({"name": "", "planet": "", "date": "", "description": "", "durationInDays": 50})

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
    ).then((res)=>alert("Viagem criada com sucesso!"))
  }

  //ta dando erro no post, dizendo que é indefinido

  return (
    <div>
      <Header />
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
    </div>
  )
}
