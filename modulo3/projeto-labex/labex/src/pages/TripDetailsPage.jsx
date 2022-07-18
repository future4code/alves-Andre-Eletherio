import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { BASE_URL } from "../constants/BASE_URL";
import { useRequestData } from "../hooks/useRequestData";
import { Screen, TripDetailsStyle } from "../styles/style";

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
      BASE_URL + `/trips/${pathParams.id}/candidates/${personId}/decide`, { "approve": aprove }, {
      headers: {
        "auth": localStorage.getItem("token")
      }
    }
    ).then((res) => getTripDetail())
  }

  // get user id: trip.candidates[0].name
  // trip id: pathParams.id

  const pending = trip.candidates && trip.candidates.map((person, i) => {
    return (
      <div className="choose" key={i}>
        <p>{person.name}</p>
        <div>
          <button className="buttonPerson" onClick={() => decideCandidate(person.id, false)}>❌</button>
          <button className="buttonPerson" onClick={() => decideCandidate(person.id, true)}>✅</button>
        </div>
      </div>
    )
  })
  const approved = trip.candidates && trip.approved.map((person, i) => <p key={i}>{person.name}</p>)

  return (
    <Screen>
      <Header />
      <TripDetailsStyle>
        <section className="card">
            <h1 className="title">{trip.name}</h1>
            <div className="infos">
              <p>Descrição: {trip.description}</p>
              <p>Planeta: {trip.planet}</p>
              <p>Duração: {trip.durationInDays}</p>
              <p>Data: {trip.date}</p>
            </div>
            <div className="candidates">
              <div className="pendents">
                <h1>Candidatos Pendentes</h1>
                {trip.candidates?.length > 0 ? pending : <p>Sem candidatos</p>}
              </div>
              <div className="approved">
                <h1>Candidatos Aprocados</h1>
                {trip.approved?.length > 0 ? approved : <p>Sem candidatos</p>}
              </div>
            </div>
        </section>
      </TripDetailsStyle>
    </Screen>
  )
}
