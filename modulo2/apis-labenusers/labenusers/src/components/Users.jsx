import React, { Component } from "react";
import axios from 'axios'

export class Users extends Component {
    state = {
        searchName: '',
        nameFilter: ''
    }
    
    componentDidMount() {
        this.props.getAllUsers();
    }

    searchUsers = () => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.searchName}&email=`,
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res)=>{
            console.log(res.data[0].name)
            this.setState({nameFilter: res.data[0].name})
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleName = (e) => {
        this.setState({searchName: e.target.value})
    }

    render() {

        return (
            <section>
                <h1>Lista Usuários</h1>
                <div>
                    <input type="text" onChange={this.handleName}/>
                    <button onClick={this.searchUsers}>Buscar</button>
                </div>
                {this.props.arrayUsers.filter((user)=> {
                    if (this.state.nameFilter === '') {
                        return user
                    } else {
                        return user.name === this.state.nameFilter
                    }
                }).map((user) => {
                    return (
                        <div key={user.id}>
                            <li onClick={()=> this.props.toInfo(user)}>{user.name}</li>
                            <button onClick={() => this.props.deleteUser(user.id)}>X</button>
                        </div>
                    )
                })}
            </section>
        )
    }
}