import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";
import { CardsHomePageStyle } from "../styles/style";

export function CardsHome({ trip }) {
    const navigate = useNavigate()

    return (
        <CardsHomePageStyle className="transformScale" onClick={() => goToApplicationFormPage(navigate, trip)}>
            {trip &&
                <div>
                    <div className="title">
                        <h1>{trip.name}</h1>
                    </div>
                    <div className="body">
                        <p>{trip.description}</p>
                        <p>Data: {trip.date}</p>
                        <p>Duração: {trip.durationInDays} dias</p>
                        <p>Planeta: {trip.planet}</p>
                    </div>
                    <div className="buttonDiv">
                        <button className="buttonHover">Inscrever-se</button>
                    </div>
                </div>
            }
        </CardsHomePageStyle>
    )
}