import React from "react";
import styled from 'styled-components'

const Button = styled.button`
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
`;

export class ButtonPlaylist extends React.Component {

    render() {

        return(
            <Button onClick={this.props.changeButton}>Criar Playlist</Button>
        )
    }
}