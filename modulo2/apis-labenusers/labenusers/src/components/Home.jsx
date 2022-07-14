import React, { Component } from "react";
import axios from 'axios'

export class Home extends Component {
    state = {
        name: '',
        email: ''
    }

    createUser = () => {
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                name: this.state.name,
                email: this.state.email
            },
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((response) => {
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({name: '', email: '',})
        }).catch((error) => {
            console.log(error.response)
        })
    }

    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    getEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {

        return (
            <section>
                <h1>Criar Usuário</h1>
                <input type="text" placeholder="Nome" value={this.state.name} onChange={this.getName} />
                <input type="text" name="" id="" placeholder="E-mail" value={this.state.email} onChange={this.getEmail} />
                <button onClick={this.createUser}>Criar Usuário</button>
            </section>
        )
    }
}