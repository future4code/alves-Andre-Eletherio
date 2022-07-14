import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NovoPost = styled.section`
  display: flex;
  flex-direction: column;
`;

const InputPost = styled.input`
  margin: 1px 0;
  background-color: #000;
  color: #fff;
`;

const ButtonInput = styled.button`
  margin: 1px 0;
`;


class App extends React.Component {

  state = {
    array: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Ana',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Jonas',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    nome: '',
    fotoDoUsuario: '',
    fotoDoPost: ''
  }



  OnChangeNome = (e) => {
    this.setState({
      nome: e.target.value
    })
  }

  OnChangeFotoUsuario = (e) => {
    this.setState({
      fotoDoUsuario: e.target.value
    })
  }

  OnChangeFotoPost = (e) => {
    this.setState({
      fotoDoPost: e.target.value
    })
  }

  onClickButton = () => {
    const newArray = [...this.state.array]
    newArray.push({
      nomeUsuario: this.state.nome,
      fotoUsuario: this.state.fotoDoUsuario,
      fotoPost: this.state.fotoDoPost
    })
    this.setState({
      array: newArray,
      nome: '',
      fotoDoUsuario: '',
      fotoDoPost: ''

    })
  }

  render() {
    console.log(this.state.nome)
    console.log(this.state.fotoDoUsuario)
    console.log(this.state.fotoDoPost)

    const listaPessoas = this.state.array.map((pessoa) => <Post {...pessoa}></Post>)

    return (
      <MainContainer>
        <NovoPost>
          <InputPost onChange={this.OnChangeNome} placeholder='Nome' value={this.state.nome}/>
          <InputPost onChange={this.OnChangeFotoUsuario} placeholder='Foto Usuário' value={this.state.fotoDoUsuario}/>
          <InputPost onChange={this.OnChangeFotoPost} placeholder='Foto Post' value={this.state.fotoDoPost}/>
          <ButtonInput type='submit' onClick={this.onClickButton}>Postar</ButtonInput>
        </NovoPost>
        {listaPessoas}
      </MainContainer>
    );
  }
}

export default App;
