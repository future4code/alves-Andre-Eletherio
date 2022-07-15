import React, { Component } from 'react';
import axios from 'axios'
import { Home } from './components/Home'
import { Users } from './components/Users'
import { Info } from './components/Info';

export default class App extends Component {
  state = {
    name: '',
    email: '',
    page: "home",
    userInfoId: {},
    arrayUsers: [],
  }

  deleteUser = (userId) => {
    if (window.confirm("Realmente deseja deletar esse usuário?")) {
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "andre-eletherio-alves"
          }
        }
      ).then((response) => {
        alert("Usuário deletado com sucesso!")
        this.getAllUsers()
      }).catch((error) => {
        console.log(error)
      })
    } else {
      alert("não foi apagado opa")
    }
  }

  deleteUserInfo = (userId) => {
    if (window.confirm("Realmente deseja deletar esse usuário?")) {
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "andre-eletherio-alves"
          }
        }
      ).then((response) => {
        alert("Usuário deletado com sucesso!")
        this.getAllUsers()
        this.setState({page: "users"})
      }).catch((error) => {
        console.log(error)
      })
    } else {
      alert("não foi apagado opa")
    }
  }

  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "andre-eletherio-alves"
        }
      }
    ).then((response) => {
      this.setState({ arrayUsers: response.data })
    }).catch((error) => {
      console.log(error)
    })
  }

  choosePage = () => {
    switch (this.state.page) {
      case "home":
        return <Home
          name={this.state.name}
          email={this.state.email}
          getName={this.getName}
          getEmail={this.getEmail}
          getAllUsers={this.getAllUsers}
        />
      case "users":
        return <Users
          getAllUsers={this.getAllUsers}
          deleteUser={this.deleteUser}
          toInfo={this.toInfo}
          arrayUsers={this.state.arrayUsers}
        />
      case "info":
        return <Info
          userInfoId={this.state.userInfoId}
          toUsers={this.toUsers}
          deleteUser={this.deleteUserInfo}
        />
    }
  }

  changePage = () => {
    this.state.page === "home" ? this.setState({ page: "users" }) : this.setState({ page: "home" })
  }

  toInfo = (user) => {
    this.setState({ page: "info", userInfoId: { id: user.id } })
  }

  toUsers = () => {
    this.setState({ page: "users" })
  }

  render() {

    return (
      <section>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.choosePage()}
      </section>
    )
  }
} 
