import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import { Home } from './components/Home'
import { Users } from './components/Users'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Info } from './components/Info';

export default class App extends Component {
  state = {
    name: '',
    email: '',
    arrayUsers: [],
    page: false,
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
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
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

  changeLink = () => {
    this.setState({
      page: !this.state.page
    })
  }

  render() {
    let rout
    this.state.page ? rout = "/" : rout = "/users"

    return (
      <Router>
        <section>
          <Link to={rout}><button onClick={this.changeLink}>Trocar de tela</button></Link>
          <Switch>
            <Route exact path={"/"}>
              <Home
                name={this.state.name}
                email={this.state.email}
                getName={this.getName}
                getEmail={this.getEmail}
                getAllUsers={this.getAllUsers}
              />
            </Route>
            <Route exact path={"/users"}>
              <Users
                getAllUsers={this.getAllUsers}
                arrayUsers={this.state.arrayUsers}
              />
            </Route>
            <Route path={"/info"}>
              <Info/>
            </Route>
          </Switch>
        </section>
      </Router>
    )
  }
} 
