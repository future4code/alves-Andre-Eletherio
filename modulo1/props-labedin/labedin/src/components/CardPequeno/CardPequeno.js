import React from "react"
import { StyleCardPequeno } from "./StyleCardPequeno"

export function CardPequeno(props) {
    return (
        <StyleCardPequeno>
            <img src={props.imagem} />
            <p><strong>{props.nome}: </strong>{props.complemento}</p>
        </StyleCardPequeno>
    )
}