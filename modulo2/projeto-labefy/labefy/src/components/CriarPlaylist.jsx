import axios from 'axios'
import React from "react";

export class CriarPlaylist extends React.Component {
    state = {
        newPlaylist: '',
    }

    getNewPlaylistName = (e) => {
        this.setState({newPlaylist: e.target.value})
    }

    createPlaylist = () => {
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {name: this.state.newPlaylist},
            {
                headers: {
                    Authorization: "andre-eletherio-alves"
                }
            }
        ).then((res)=>console.log(res)).catch((err)=>console.log(err.response))
    }

    handleKeyDown = (e) => {
        e.key === "Enter" && this.createPlaylist()
    }

    render(){

        return(
            <section>
                <input type="text" onChange={this.getNewPlaylistName} placeholder="Nova Playlist" onKeyDown={this.handleKeyDown}/>
            </section>
        )
    }
}