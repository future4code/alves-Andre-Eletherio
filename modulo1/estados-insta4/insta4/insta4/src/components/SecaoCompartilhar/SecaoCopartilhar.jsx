import React, { Component } from "react";
import instagramLogo from '../../img/instagram-logo.png'
import facebookLogo from '../../img/facebook-logo.png'
import twitterLogo from '../../img/twitter-logo.png'
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #000;
`;

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 10px;
`

const ImgShare = styled.img`
    width: 20px;
`;

const BotaoComp = styled.button`
    background-color: #fff;
    border-radius: 10px;
`;

export class SecaoCompartilhar extends Component {

    state = {
        value: '',
        input: ''
    }

    onClickCompInstagram = () => {
        this.setState({
            value: 'instagram'
        })
    }
    
    onClickCompFacebook = () => {
        this.setState({
            value: 'facebook'
        })
    }

    onClickCompTwetter = () => {
        this.setState({
            value: 'twitter'
        })
    }

    getInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    compartilhar = () => {
        console.log(`Post compartilhado no ${this.state.value} com a mensagem: ${this.state.input}`)
    }

    render() {

        return (
            <Section>
                <div>
                    <label>
                        Mensagem:
                        <input onChange={this.getInput} type="text" />
                    </label>
                </div>
                <Botoes>
                    <ImgShare onClick={this.onClickCompInstagram} value='instagram' src={instagramLogo} alt="Logo Instagram" />
                    <ImgShare onClick={this.onClickCompFacebook} value='facebook' src={facebookLogo} alt="Logo Facebook" />
                    <ImgShare onClick={this.onClickCompTwetter} value='twitter' src={twitterLogo} alt="Logo Twitter" />
                </Botoes>   
                <BotaoComp onClick={this.compartilhar}>Compartilhar</BotaoComp>
            </Section>
        )
    }
}