import React from "react";
import { AddSong } from "./components/AddSong";
import { AddPlaylist } from "./components/AddPlaylist";
import { DetailsPlaylist } from "./components/DetailsPlaylist";
import { PlaylistList } from "./components/PlaylistList";
import axios from 'axios'
import { Page, Header, H1, Nav, Main, Section, DetailAndAdd, Detail, Add } from './StyleApp'
import { HeaderPlaylist } from "./HeaderPlaylist";


export default class App extends React.Component {
  state = {
    selectedPlaylist: '',
    songs: [],
    playlistName: ''
  }

  selectPlaylist = (playlist) => {
    this.setState({
      selectedPlaylist: playlist.id,
      playlistName: playlist.name
    })
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
      {
        headers: {
          Authorization: "andre-eletherio-alves"
        }
      }
    ).then((res) => {
      this.setState({ songs: res.data.result.tracks })
    }).catch((err) => {
      console.log(err)
    })
  }

  deletePlaylist = (playlist) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`,
      {
        headers: {
          Authorization: "andre-eletherio-alves"
        }
      }
    ).then((res) => {
      this.setState({ songs: res.data.result.tracks })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {

    return (
      <Page>
        <Header>Labefy</Header>
        <Main>
          <Nav>
            <H1>Playlists:</H1>
            <PlaylistList selectPlaylist={this.selectPlaylist} deletePlaylist={this.deletePlaylist} />
            <AddPlaylist />
          </Nav>
          <Section>
            <HeaderPlaylist playlistName={this.state.playlistName} />
            <DetailAndAdd>
              <Detail>
                <DetailsPlaylist playlistId={this.state.selectedPlaylist} songs={this.state.songs} />
              </Detail>
              <Add>
                <AddSong playlistId={this.state.selectedPlaylist} selectPlaylist={this.selectPlaylist} />
              </Add>
            </DetailAndAdd>
          </Section>
        </Main>
      </Page>
    )
  }
}