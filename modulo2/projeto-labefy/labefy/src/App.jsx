import React from "react";
import { AddSong } from "./components/AddSong";
import { AddPlaylist } from "./components/AddPlaylist";
import { DetailsPlaylist } from "./components/DetailsPlaylist";
import { PlaylistList } from "./components/PlaylistList";
import axios from 'axios'
import { Page, Header, H1Header, H1, Nav, Main, Section, DetailAndAdd, Detail, Add } from './StyleApp'
import { HeaderPlaylist } from "./HeaderPlaylist";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
  }
`


export default class App extends React.Component {
  state = {
    selectedPlaylist: '',
    songs: [],
    playlistName: '',
    playlists: [],
    playlist: {}
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

  selectPlaylist = (playlist) => {
    this.setState({
      selectedPlaylist: playlist.id,
      playlistName: playlist.name,
      playlist: playlist
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
        <GlobalStyle/>
        <Header><H1Header>Labefy</H1Header></Header>
        <Main>
          <Nav>
            <H1>Playlists:</H1>
            <PlaylistList selectPlaylist={this.selectPlaylist} deletePlaylist={this.deletePlaylist} playlists={this.state.playlists}/>
            <AddPlaylist />
          </Nav>
          <Section>
            <HeaderPlaylist playlistName={this.state.playlistName} />
            <DetailAndAdd>
              <Detail>
                <DetailsPlaylist playlistId={this.state.selectedPlaylist} songs={this.state.songs} />
              </Detail>
              <Add>
                <AddSong playlistId={this.state.selectedPlaylist} selectPlaylist={this.selectPlaylist} playlist={this.state.playlist} />
              </Add>
            </DetailAndAdd>
          </Section>
        </Main>
      </Page>
    )
  }
}