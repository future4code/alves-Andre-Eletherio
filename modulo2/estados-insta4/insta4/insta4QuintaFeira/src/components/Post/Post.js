import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import saved from '../../img/bookmark_black_24dp.svg'
import notSaved from '../../img/bookmark_border_black_24dp.svg'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import share from '../../img/share.svg'
import comentarios from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
   this.setState({
    curtido: !this.state.curtido
   })
   if (this.state.curtido === false) {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
   } else {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas - 1
    })
   }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickCSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if (this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar/>
    }

    let iconeSalvar

    if (this.state.salvo) {
      iconeSalvar = saved
    } else {
      iconeSalvar = notSaved
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador 
        icone={share}
        onClickIcone={this.onClickShare}
        />

        <IconeComContador 
        icone={iconeSalvar}
        onClickIcone={this.onClickCSalvar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post