import React from "react";
import axios from 'axios'

export class PlaylistList extends React.Component {
    state = {
        playlists: []
    }

    getAllPlaylists = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res) => {
            this.setState({
                playlists: res.data.result.list
            })
        })
    }

    render() {
        const playlistList = this.state.playlists.map((playlist) => <li key={playlist.id} onClick={()=> this.props.selectPlaylist(playlist.id)}>{playlist.name}</li>)

        return (
            <section>
                {playlistList}
                <button onClick={this.getAllPlaylists}>Get Playlist</button>
            </section>
        )
    }
}