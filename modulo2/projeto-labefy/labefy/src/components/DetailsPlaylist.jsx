import React from "react";
import axios from 'axios'

export class DetailsPlaylist extends React.Component {
    state = {
        songs: [],
    }

    getPlaylistTracks = () => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res)=> {
            this.setState({songs: res.data.result.tracks})
        }).catch((err)=> {
            console.log(err)
        })
    }

    render() {
        const tracks = this.state.songs.map((track)=> <li key={track.id}>{track.name}</li>)

        return(
            <section>
                {tracks}
                <button onClick={this.getPlaylistTracks}>get track</button>
            </section>
        )
    }
}