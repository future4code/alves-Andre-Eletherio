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
                name: this.props.name,
                email: this.props.email
            },
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((response) => {
            console.log(response.status)
            this.props.getAllUsers()
        }).catch((error) => {
            console.log(error.response)
        })
    }

    render() {

        return (
            <section>
                <input type="text" placeholder="Nome" onChange={this.props.getName} />
                <input type="text" name="" id="" placeholder="E-mail" onChange={this.props.getEmail} />
                <button onClick={this.createUser}>Criar Usuário</button>
            </section>
        )
    }
}