import React from "react";
import axios from 'axios'
import styled from "styled-components";

const Li = styled.li`
    margin-top: 5px;
    border-bottom: 0.5px solid #ffffff2f;
    cursor: pointer;
`;

export class PlaylistList extends React.Component {

    render() {
        const playlistList = this.props.playlists.map((playlist) => <Li key={playlist.id} onDoubleClick={()=> this.props.deletePlaylist(playlist)} onClick={() => this.props.selectPlaylist(playlist)}>{playlist.name}</Li>)

        return (
            <section>
                {playlistList}
            </section>
        )
    }
}