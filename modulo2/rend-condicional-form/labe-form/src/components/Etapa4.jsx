import React, { Component } from "react";
import styled from 'styled-components'

const Section = styled.section`
    text-align: center;
`;

export default class Etapa4 extends Component {

    render() {

        return(
            <Section>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Section>
        )
    }
}