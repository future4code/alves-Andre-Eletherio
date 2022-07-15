import React, { Component } from "react";
import axios from 'axios'

export class EditUser extends Component {
    state = {
        name: '',
        email: '',
    }

    editUser(id) {
        axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            { name: this.state.name, email: this.state.email },
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((response) => {
            console.log(response)
            this.props.backToInfo()
            this.props.getUserById()
        }).catch((err) => {
            console.log(err)
        })
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    render() {
        console.log(this.state.name)

        return (
            <section>
                <h1>Editar</h1>
                <input type="text" onChange={this.handleName} placeholder="Novo nome" />
                <input type="text" onChange={this.handleEmail} name="" id="" placeholder="Novo e-mail" />
                <button onClick={() => this.editUser(this.props.userId)}>Salvar</button>
                <button onClick={this.props.backToInfo}>Voltar</button>
            </section>
        )
    }
}