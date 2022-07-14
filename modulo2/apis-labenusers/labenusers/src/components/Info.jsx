import axios from "axios";
import React, { Component } from "react";
import { EditUser } from "./EditUser";

export class Info extends Component {
    state = {
        user: {},
        userId: '',
        page: 'info',
    }

    componentDidMount() {
        this.getUserById()
    }a

    getUserById = async () => {
        try {
            const res = await axios.get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userInfoId.id}`,
                {
                    headers: {
                        Authorization: "andre-eletherio-alves"
                    }
                }
            )
            this.setState({ user: { name: res.data.name, email: res.data.email }, userId: res.data.id })
        } catch (err) {
            console.log(err)
        }
    }

    toEdit = () => {
        this.setState({page: "edit"})
    }

    backToInfo = () => {
        this.setState({ page: "info" })
    }

    choosePage = () => {
        switch (this.state.page) {
            case "info":
                return <section>
                    <h1>Nome: {this.state.user.name}</h1>
                    <h1>Email: {this.state.user.email}</h1>
                    <button onClick={() => this.props.deleteUser(this.state.userId)}>Delete User</button>
                    <button onClick={this.props.toUsers}>Voltar</button>
                    <button onClick={this.toEdit}>Editar</button>
                </section>
            case "edit":
                return <EditUser
                backToInfo={this.backToInfo}
                userId={this.state.userId}
                getUserById={this.getUserById}
                />
        }
    }

    render() {

        return (
            <section>
                {this.choosePage()}
            </section>
        )
    }
}