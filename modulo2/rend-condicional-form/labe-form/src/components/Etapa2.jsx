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
                            <label htmlFor="curso">5. Qual curso?</label>
                            <input type="text" name="" id="curso" />
                        </Li>
                        <Li>
                            <label htmlFor="unidade">6. Qual a unidade de ensino?</label>
                            <input type="text" name="" id="unidade" />
                        </Li>
                    </Ol>
                    <button onClick={this.props.toStage4}>Próxima etapa</button>
                </Form>
            </SectionBig>
        )
    }
}