import React, { Component } from "react";
import styled from 'styled-components'

const Titulo = styled.h1`
    font-size: 20px;
`;

const SectionBig = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`;

const Ol = styled.ol`
    padding: 0;
    margin: 0;
`;

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

export default class Etapa1 extends Component {

    render() {

        return (
            <SectionBig>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <Form action="submit">
                    <Ol>
                        <Li>
                            <label htmlFor="motivo">5. Por que você não terminou um curso de graduação?</label>
                            <input type="text" name="" id="motivo" />
                        </Li>
                        <Li>
                            <label htmlFor="curso-complementar">6. Você fez algum curso complementar?</label>
                            <select name="" id="curso-complementar">
                                <option value="none" selected disabled hidden>Selecione</option>
                                <option value="Curso-tecnico">Curso técnico</option>
                                <option value="Curso-ingles">Cursos de inglês</option>
                                <option value="Nenhum-curso">Nenhum</option>
                            </select>
                        </Li>
                    </Ol>
                    <button onClick={this.props.toStage4}>Próxima etapa</button>
                </Form>
            </SectionBig>
        )
    }
}