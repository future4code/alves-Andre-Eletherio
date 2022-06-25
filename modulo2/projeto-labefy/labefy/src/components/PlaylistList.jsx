import React from "react";
import axios from 'axios'
import styled from "styled-components";

const Li = styled.li`
    margin-top: 5px;
    border-bottom: 0.5px solid #ffffff2f;
    cursor: pointer;
`;

export class PlaylistList extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    componentDidUpdate(prevProps, prevState) {
        this.state.playlists !== prevState.playlists && this.getAllPlaylists()
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
        const playlistList = this.state.playlists.map((playlist) => <Li key={playlist.id} onDoubleClick={()=> this.props.deletePlaylist(playlist)} onClick={() => this.props.selectPlaylist(playlist)}>{playlist.name}</Li>)

        return (
            <section>
                {playlistList}
            </section>
        )
    }
}