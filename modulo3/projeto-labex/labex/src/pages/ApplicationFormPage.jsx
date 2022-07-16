import { useState } from "react"
import { useForm } from "../hooks/useForm"
import {BASE_URL} from '../constants/BASE_URL'
import { useRequestData } from "../hooks/useRequestData"
import axios from "axios"
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"

export function ApplicationFormPage() {
  const [tripId, setTripId] = useState('')
  const pathParams = useParams()
  
  const {form, onChange} = useForm({"name": '', "age": 50, "applicationText": '', "profession": '', "country": ''})
  const [data, isLoading, error] = useRequestData(BASE_URL + "/trips")

  const submit = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/trips/" + pathParams.id + "/apply", form
    ).then((res)=>alert("Cadastrado com Sucesso!")).catch((err)=>console.log(err))
  }

  return (
    <div>
      <Header />
      <h1>Inscreva-se para uma viagem</h1>
      { isLoading ? <p>Carregando...</p> :
      <form onSubmit={submit} >
        <p>{pathParams.name}</p>
        <input name="name" onChange={onChange} value={form.name} />
        <input name="age" onChange={onChange} value={form.age} type="number" />
        <input name="applicationText" onChange={onChange} value={form.applicationText} />
        <input name="profession" onChange={onChange} value={form.profession} />
        <input name="country" onChange={onChange} value={form.country} />
        <button>Enviar</button>
      </form>
      }
    </div>
  )
}
