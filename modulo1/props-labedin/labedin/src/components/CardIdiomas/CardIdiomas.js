import React from "react";
import {StyleCardIdiomas} from "./StyleCardIdiomas"

export function CardIdiomas(props) {
    return (
        <StyleCardIdiomas>
            <ul>
                <li>
                    <h3>{props.idioma1}</h3>
                    <h4>{props.nivelIdioma1}</h4>
                </li>
                <li>
                    <h3>{props.idioma2}</h3>
                    <h4>{props.nivelIdioma2}</h4>
                </li>
            </ul>
        </StyleCardIdiomas>
    )
}