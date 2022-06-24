import React from "react"
import axios from 'axios'

export class AddSong extends React.Component {
    state = {
        song: '',
        artist: '',
        link: ''
    }

    getSong = (e) => {
        this.setState({song: e.target.value})
    }

    getArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    getLink = (e) => {
        this.setState({link: e.target.value})
    }

    addTrackToPlaylist = () => {
        let body = {name: this.state.song, artist: this.state.artist, url: this.state.link}
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body,
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err.response)
        })
    }

    render() {

        return(
            <section>
                <input onChange={this.getSong} placeholder="Música"/>
                <input onChange={this.getArtist} placeholder="Artista"/>
                <input onChange={this.getLink} placeholder="Link"/>
                <button onClick={this.addTrackToPlaylist}>Adicionar</button>
            </section>
        )
    }
}