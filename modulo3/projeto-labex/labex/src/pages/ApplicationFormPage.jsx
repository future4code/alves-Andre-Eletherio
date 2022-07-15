import { useState } from "react"
import { useForm } from "../hooks/useForm"
import {BASE_URL} from '../constants/BASE_URL'
import { useRequestData } from "../hooks/useRequestData"
import axios from "axios"

export function ApplicationFormPage() {
  const [tripId, setTripId] = useState('')
  
  const {form, onChange} = useForm({"name": '', "age": 50, "applicationText": '', "profession": '', "country": ''})
  const [data, isLoading, error] = useRequestData(BASE_URL + "/trips")

  const getId = (e) => {
    setTripId(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/trips/" + tripId + "/apply", form
    ).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

  

  const options = data && data.trips.map((trip)=><option key={trip.id} value={trip.id}>{trip.name}</option>)

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={submit} >
        <select name="id" onChange={getId}>
          {options}
        </select>
        <input name="name" onChange={onChange} value={form.name} />
        <input name="age" onChange={onChange} value={form.age} type="number" />
        <input name="applicationText" onChange={onChange} value={form.applicationText} />
        <input name="profession" onChange={onChange} value={form.profession} />
        <input name="country" onChange={onChange} value={form.country} />
        <button>Enviar</button>
      </form>
    </div>
  )
}
