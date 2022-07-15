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

    state = {
        nome: '',
        idade: '',
        email: '',
        escolaridade: ''
    }

    onChangeName = (e) => {
        this.setState({
            nome: e.target.value
        })
    }

    onChangeAge = (e) => {
        this.setState({
            idade: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            idade: e.target.value
        })
    }

    onChangeSelect = (e) => {
        this.setState({
            escolaridade: e.target.value
        })
    }

    render() {
        return (
            <SectionBig>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <Form action="submit">
                    <Ol>
                        <Li>
                            <label htmlFor="nome">1. Qual seu nome?</label>
                            <input type="text" name="" id="nome" onChange={this.onChangeName}/>
                        </Li>
                        <Li>
                            <label htmlFor="idade">2. Qual sua idade?</label>
                            <input type="number" name="" id="idade" onChangeAge={this.onChangeAge}/>
                        </Li>
                        <Li>
                            <label htmlFor="email">3. Qual seu email?</label>
                            <input type="text" name="" id="email" onChangeEmail={this.onChangeEmail}/>
                        </Li>
                        <Li>
                            <label htmlFor="escolaridade">4. Qual sua escolaridade?</label>
                            <select name="escolaridade" id="escolaridade" onChange={this.props.nextStep}>
                                <option value="none" selected disabled hidden>Selecione sua escolaridade</option>
                                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                            </select>
                        </Li>
                    </Ol>
                    <button type="submit" onClick={this.props.onClickButtonStep1}>Próxima etapa</button>
                </Form>
            </SectionBig>
        )
    }
}