import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
    ordem: '',
    busca: ''
  }

  componentDidUpdate() {
    localStorage.setItem("Lista", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const listaTarefasMount = JSON.parse(localStorage.getItem("Lista"))
    listaTarefasMount && this.setState({ tarefas: listaTarefasMount })
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({
      tarefas: novaListaTarefas
    })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({
      tarefas: novaListaTarefas
    })
    console.log(novaListaTarefas)
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  apagarTarefas = () => {
    this.setState({
      tarefas: []
    })
  }

  onChangeOrdem = (e) => {
    this.setState({
      ordem: e.target.value
    })
  }

  onChangeBusca = (e) => {
    this.setState({
      busca: e.target.value
    })
  }

  removeTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter((tarefa) => {
      if (tarefa.id === id) {
        return false
      } else {
        return true
      }
    })
    this.setState({
      tarefas: novaListaTarefas
    })
  }

  render() {
    console.log(this.state.busca)
    let listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    let listaOrdenada = listaFiltrada
    if (this.state.ordem === "alf cresc") {
      listaOrdenada = listaFiltrada.sort((a, b) => a.texto.localeCompare(b.texto))
    } else if (this.state.ordem === "alf desc") {
      listaOrdenada = listaFiltrada.sort((a, b) => b.texto.localeCompare(a.texto))
    } else {
      listaOrdenada = listaFiltrada   
    }

    let listaBuscada = listaOrdenada
    if (this.state.busca) {
      listaBuscada = listaBuscada.filter((tarefa) => tarefa.texto.toLowerCase().includes(this.state.busca.toLowerCase()))
    } else {
      listaBuscada = listaBuscada
    }
    


    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagarTarefas}>Apagar todas</button>
          <select onChange={this.onChangeOrdem}>
            <option selected disabled hidden>Ordenar</option>
            <option value={"alf cresc"}>Alfabetica ↑</option>
            <option value={"alf desc"}>Alfabética ↓</option>
          </select>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <label>Pesquisar</label>
          <input value={this.state.busca} placeholder='Buscar por tarefa' onChange={this.onChangeBusca}></input>
        </InputsContainer>
        <TarefaList>
          {listaBuscada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.removeTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
