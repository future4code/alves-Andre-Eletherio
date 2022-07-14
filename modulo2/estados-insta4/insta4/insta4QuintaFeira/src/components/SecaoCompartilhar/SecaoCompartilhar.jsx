import React, { Component } from 'react'
import styled from 'styled-components'
import logoInstagram from '../../img/instagram-logo.png'
import logoFacebook from '../../img/facebook-logo.png'
import logoTwitter from '../../img/twitter-logo.png'

const SectionComp = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DivComp = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

const ImgComp = styled.img`
    width: 25px;
    margin: 0 1px;
`;

const ButtonComp = styled.button`
    width: 35%;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export class SecaoCompartilhar extends Component {

    state = {
        nomeApp: '',
        textoDigitado: ''
    }

    onClickInstagram = () => {
        this.setState({
            nomeApp: 'Instagram'
        })
    }

    onClickFacebook = () => {
        this.setState({
            nomeApp: 'Facebook'
        })
    }

    onClickTwitter = () => {
        this.setState({
            nomeApp: 'Twitter'
        })
    }

    onChangeInput = (e) => {
        this.setState({
            textoDigitado: e.target.value
        })
    }

    onClickButton = () => {
        console.log(`Post compartilhado no ${this.state.nomeApp} com a mensagem: ${this.state.textoDigitado}`)
    }

    render() {
        return (
            <SectionComp>
                <DivComp>
                    <input onChange={this.onChangeInput} type="text" />
                    <ImgComp onClick={this.onClickInstagram} src={logoInstagram} alt="Ícone Instagram" />
                    <ImgComp onClick={this.onClickFacebook} value={'Facebook'} src={logoFacebook} alt="Ícone Facebook" />
                    <ImgComp onClick={this.onClickTwitter} value={'Twitter'} src={logoTwitter} alt="Ícone Twitter" />
                </DivComp>
                <ButtonComp onClick={this.onClickButton}>Compartilhar</ButtonComp>
            </SectionComp>
        )
    }
}