import { useForm } from "../hooks/useForm"
import { BASE_URL } from '../constants/BASE_URL'
import { useRequestData } from "../hooks/useRequestData"
import axios from "axios"
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"
import { Screen, FormPageStyle } from "../styles/style"

export function ApplicationFormPage() {
  const pathParams = useParams()

  const { form, onChange, clean } = useForm({ "name": '', "age": Infinity, "applicationText": '', "profession": '', "country": '' })
  const [data, isLoading, error] = useRequestData(BASE_URL + "/trips")

  const submit = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/trips/" + pathParams.id + "/apply", form
    ).then((res) => {
      alert("Cadastrado com Sucesso!")
      clean()
    })
  }

  return (
    <Screen>
      <Header />
      <FormPageStyle>
        <section className="card">
          <h1>{pathParams.name}</h1>
          {isLoading ? <p>Carregando...</p> :
            <form className="form" onSubmit={submit} >
              <input value={form.name} required pattern="^.{3,}" title="Mínimo de 3 letras." placeholder="Nome" name="name" onChange={onChange} value={form.name} />
              <input value={form.age} required placeholder="Idade" name="age" onChange={onChange} type="number" min={18} />
              <input value={form.applicationText} required pattern="^.{30,}" title="O texto deve ter no mínimo 30 caracteres" placeholder="Candidatura" name="applicationText" onChange={onChange} value={form.applicationText} />
              <input value={form.profession} required pattern="^.{10,}" title="A profissão deve ter no mínimo 10 caracteres" placeholder="Profissão" name="profession" onChange={onChange} value={form.profession} />
              <input value={form.country} required placeholder="País" name="country" onChange={onChange} />
              <button className="buttonHover">Enviar</button>
            </form>
          }
        </section>
      </FormPageStyle>
    </Screen>
  )
}
