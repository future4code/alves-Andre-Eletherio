import React from 'react';
import {StyleImagemButton} from './StyleImagemButton'

function ImagemButton(props) {
    return (
        <StyleImagemButton>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </StyleImagemButton>

    )
}

export default ImagemButton;