import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { BASE_URL } from "../constants/BASE_URL";
import { useRequestData } from "../hooks/useRequestData";

export function TripDetailsPage() {
  const [trip, setTrip] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    getTripDetail()
  }, [])

  const pathParams = useParams();

  const getTripDetail = () => {
    setIsLoading(true)
    const token = localStorage.getItem("token")
    axios.get(
      BASE_URL + "/trip/" + pathParams.id, {
      headers: {
        auth: token
      }
    }
    ).then((res) => {
      setTrip(res.data.trip)
      setIsLoading(false)
    }).catch((err) => {
      setError(err.response.data)
      setIsLoading(false)
    })
  }

  const decideCandidate = (personId, aprove) => {
    axios.put(
      BASE_URL + `/trips/${pathParams.id}/candidates/${personId}/decide`, {"approve": aprove}, {
        headers: {
          "auth": localStorage.getItem("token")
        }
      }
    ).then((res)=>getTripDetail())
  }

  // get user id: trip.candidates[0].name
  // trip id: pathParams.id

  const pending = trip.candidates && trip.candidates.map((person, i)=>{
  return (
    <div key={i}>
      <p>{person.name}</p>
      <button onClick={()=> decideCandidate(person.id, false)}>Não</button>
      <button onClick={()=> decideCandidate(person.id, true)}>Sim</button>
    </div>
  )
})
  const approved = trip.candidates && trip.approved.map((person, i)=><li key={i}>{person.name}</li>)

  return (
    <div>
      <Header />
      <h1>{trip.name}</h1>
      <div>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </div>
      <div>
        <h1>Candidatos Pendentes</h1>
        {trip.candidates?.length > 0 ? pending : <p>Sem candidatos</p>}
      </div>
      <div>
        <h1>Candidatos Aprocados</h1>
        {trip.approved?.length > 0 ? approved : <p>Sem candidatos</p>}
      </div>
    </div>
  )
}
