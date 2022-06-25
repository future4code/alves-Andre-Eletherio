import React from "react"
import axios from 'axios'
import styled from "styled-components"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin-top: 20px;
    align-items: center;
`;

const H1 = styled.h1`
    color: #fff;
    margin: 10px;
    font-size: 20px;
`;

const Input = styled.input`
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
`;

const Button = styled.button`
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 5px;
    width: 100px;
    margin-top: 15px;
    cursor: pointer;
`;

export class AddSong extends React.Component {
    state = {
        song: '',
        artist: '',
        link: ''
    }

    getSong = (e) => {
        this.setState({ song: e.target.value })
    }

    getArtist = (e) => {
        this.setState({ artist: e.target.value })
    }

    getLink = (e) => {
        this.setState({ link: e.target.value })
    }

    addTrackToPlaylist = () => {
        let body = { name: this.state.song, artist: this.state.artist, url: this.state.link }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body,
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res) => {
            console.log(res)
            this.props.selectPlaylist(this.props.playlistId)
            this.setState({
                song: '',
                artist: '',
                link: ''
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }

    render() {

        return (
            <Section>
                <H1>Adicionar Música</H1>
                <Input value={this.state.song} onChange={this.getSong} placeholder="Música" />
                <Input value={this.state.artist} onChange={this.getArtist} placeholder="Artista" />
                <Input value={this.state.link} onChange={this.getLink} placeholder="Link" />
                <Button onClick={this.addTrackToPlaylist}>Adicionar</Button>
            </Section>
        )
    }
}