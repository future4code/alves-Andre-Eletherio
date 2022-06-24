import React from "react";
import { AddSong } from "./components/AddSong";
import { CriarPlaylist } from "./components/CriarPlaylist";
import { DetailsPlaylist } from "./components/DetailsPlaylist";
import { PlaylistList } from "./components/PlaylistList";

export default class App extends React.Component {
  state = {
    selectedPlaylist: '',
  }

  selectPlaylist = (playlistId) => {
    this.setState({
      selectedPlaylist: playlistId
    })
  }

  render(){
    // console.log(this.state.selectedPlaylist)

    return(
      <section>
        <CriarPlaylist />
        <PlaylistList selectPlaylist={this.selectPlaylist}/>
        <DetailsPlaylist playlistId={this.state.selectedPlaylist} />
        <AddSong playlistId={this.state.selectedPlaylist}/>
      </section>
    )
  }
}