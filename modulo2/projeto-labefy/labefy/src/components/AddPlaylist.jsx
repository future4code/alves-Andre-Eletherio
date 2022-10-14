import axios from 'axios'
import React from "react";
import styled from 'styled-components';
import { ButtonPlaylist } from './ButtonPlaylist';

const Section = styled.section`
    margin-top: 20px;
`;

const Input = styled.input`
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    width: 80%;
`;

export class AddPlaylist extends React.Component {
    state = {
        newPlaylist: '',
        playlistButton: "button",
    }

    getNewPlaylistName = (e) => {
        this.setState({ newPlaylist: e.target.value })
    }

    createPlaylist = () => {
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            { name: this.state.newPlaylist },
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res) => console.log(res)).catch((err) => console.log(err.response))
    }

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.createPlaylist()
            this.setState({ newPlaylist: '', playlistButton: "button" })
        }
    }

    changeButton = () => {
        this.setState({
          playlistButton: "input"
        })
      }

      testSpotfy = () => {
        axios.get(
            "https://api.spotify.com/search?q=name:abacab&type=album,track",
            {
                headers: {
                    Authorization: "asdjfi"
                }
            }
        ).then((res)=>console.log(res)).catch((err)=>console.log(err.response.data))
      }

    render() {
        const show = this.state.playlistButton === "button" ? <ButtonPlaylist changeButton={this.changeButton} /> : <Input type="text" autoFocus value={this.state.newPlaylist} onChange={this.getNewPlaylistName} placeholder="Nova Playlist" onKeyDown={this.handleKeyDown} />

        return (
            <Section>
                {show}
            </Section>
        )
    }
}