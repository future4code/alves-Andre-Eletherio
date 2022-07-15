import React from 'react';
import {StyleCardGrande} from "./StyleCardGrande"

function CardGrande(props) {
    return (
        <StyleCardGrande>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </StyleCardGrande>
    )
}

export default CardGrande;