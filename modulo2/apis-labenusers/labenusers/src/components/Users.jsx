import React, { Component } from "react";
import axios from 'axios'

export class Users extends Component {

    deleteUser = (userId) => {
        if (window.confirm("Realmente deseja deletar esse usuário?")) {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((response)=>{
            console.log(response)
            this.props.getAllUsers()
        }).catch((error)=>{
            console.log(error)
        })} else {
            alert("não foi apagado opa")
        }
    }

    componentDidMount() {
        this.props.getAllUsers();
    }
    
    render() {

        return (
            <section>
                {this.props.arrayUsers.map((user) => {
                    return (
                        <div>
                            <li>{user.name}</li>
                            <button onClick={()=> this.deleteUser(user.id)}>X</button>
                        </div>
                    )
                })}
            </section>
        )
    }
}