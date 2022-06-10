import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputEnviar = styled.div`
	display: flex;
    justify-content: center;
    padding: 5px;
	width: 100%;
`;

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const ComentarioP = styled.p`
	border-bottom: 1px solid #000;
	margin: 1px;
	padding: 3px;
`;

export class SecaoComentario extends Component {

	state = {
		valorComentario: '',
		arrayComentarios : []
	}

	onChangeComentario = (event) => {
		this.setState({
			valorComentario: event.target.value
		})
	}

	onClickButton = () => {
		const novoArray = [this.state.valorComentario, ...this.state.arrayComentarios]
		this.setState({
			arrayComentarios: novoArray,
			valorComentario: ''
		})
	}

	render() {
		const comentarios = this.state.arrayComentarios.map((comentario) => <ComentarioP>{comentario}</ComentarioP>)
		console.log(this.state.valorComentario)
		return (
			<CommentContainer>
				<InputEnviar>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.valorComentario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={this.onClickButton}>Enviar</button>
				</InputEnviar>
				{comentarios}
			</CommentContainer>
		)
	}
}
