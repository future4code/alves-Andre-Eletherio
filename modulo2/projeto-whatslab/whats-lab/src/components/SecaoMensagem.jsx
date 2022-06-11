import React, { Component } from "react";
import styled from 'styled-components'
import wallpaper from '../img/whats-app-wallpaper.png'
import dubleCheck from '../img/doublecheck.svg'

const SectionApp = styled.section`
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: 1fr 56px;
  border: 1px solid #7a7164;
  border-radius: 3px;
  height: 95vh;
  width: 600px;
  background-image: url(${wallpaper});
`;

const SectionConversa = styled.section`
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const BarraMensagem = styled.form`
    width: 100%;
    height: 52px;
    display: flex;
    background-color: #1a2329;
    grid-column: 1/2;
    grid-row: 2/3;
`;

const InputUsuario = styled.input`
    background-color: #222e35;
    margin: 5px 5px 5px 10px;
    padding: 9px 12px 11px 12px;
    border: 1px solid #7a7164;
    border-radius: 8px;
    color: rgb(206, 202, 195);
    font-size: 15px;
    font-weight: 400;
    width: 120px;
`;

const InputMensagem = styled.input`
    background-color: #222e35;
    margin: 5px 5px;
    padding: 9px 12px 11px 12px;
    border: 1px solid #7a7164;
    border-radius: 8px;
    color: rgb(206, 202, 195);
    font-size: 15px;
    font-weight: 400;
    width: 360px;
`;

const ButtonMsg = styled.button`
    background-color: #222e35;
    margin: 5px 10px 5px 5px;
    padding: 9px 12px 11px 12px;
    border: 1px solid #7a7164;
    border-radius: 8px;
    color: rgb(206, 202, 195);
    font-size: 15px;
    font-weight: 400;
    width: 68px;
`;

const MensagemEu = styled.p`
    background-color: #005c4b;
    align-self: flex-end;
    word-wrap: break-word;
    max-width: 65%;
    margin-right: 5%;
    font-size: 14.2px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
    padding: 6px 7px 8px 9px;
    border-radius: 0.5em;
    position: relative;

    &::after {
        content: '';
        border: 15px solid transparent;
        border-top-color: #005c4b;
        position: absolute;
        top: 0;
        right: -8px;
    }
`;

const DubleCheckImg = styled.img`
    width: 15px;
    margin-left: 20px;
    position: relative;
    top: 7px;
    align-self: flex-end;
`;

const MensagemOutro = styled.p`
    background-color: #202c33;
    align-self: flex-start;
    word-wrap: break-word;
    max-width: 65%;
    margin-left: 5%;
    font-size: 14.2px;
    font-weight: 400;
    line-height: 19px;
    color: #fff;
    padding: 6px 30px 8px 9px;
    border-radius: 0.5em;
    position: relative;

    &::after {
        content: '';
        border: 15px solid transparent;
        border-top-color: #202c33;
        position: absolute;
        top: 0;
        left: -8px;
    }
`;

const NomeOutro = styled.div`
    color: green;
    font-size: 12.8px;
    line-height: 22px;
    font-weight: 500;
`;

export default class SecaoMensagem extends Component {

    state = {
        valorUsuario: '',
        valorMensagem: '',
        mensagens: []
    }

    onChangeUsuario = (e) => {
        this.setState({
            valorUsuario: e.target.value
        })
    }

    onChangeMensagem = (e) => {
        this.setState({
            valorMensagem: e.target.value
        })
    }

    onClickButton = () => {
        const novoMensagens = [...this.state.mensagens, { nome: this.state.valorUsuario, mensagem: this.state.valorMensagem }]
        this.setState({
            mensagens: novoMensagens,
            valorUsuario: '',
            valorMensagem: ''
        })
    }

    
    
    render() {
        const handleSubmit = event => {
            event.preventDefault();
        }
        const listaMensagens = this.state.mensagens.map((mensagem) => {
            if (mensagem.nome.toLowerCase() == "eu") {
                return (
                    <MensagemEu>
                        {mensagem.mensagem}
                        <DubleCheckImg src={dubleCheck} alt="" />
                    </MensagemEu>
                )
            } else {
                return <MensagemOutro><NomeOutro>{mensagem.nome}</NomeOutro>{mensagem.mensagem}</MensagemOutro>
            }
        })

        return (
            <SectionApp>
                <SectionConversa>{listaMensagens}</SectionConversa>
                <BarraMensagem onSubmit={handleSubmit}>
                    <InputUsuario onChange={this.onChangeUsuario} placeholder="Usuário" type="text" value={this.state.valorUsuario} />
                    <InputMensagem onChange={this.onChangeMensagem} placeholder="Mensagem" type="text" value={this.state.valorMensagem} />
                    <ButtonMsg type="submit" onClick={this.onClickButton}>Enviar</ButtonMsg>
                </BarraMensagem>
            </SectionApp>
        )
    }
}