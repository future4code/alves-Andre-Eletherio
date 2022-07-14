import React from "react";
import axios from 'axios'
import { PlayAudio } from "./PlayAudio";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
`;

const Music = styled.div`
    background-color: #0f0f0f;
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    position: relative;
    left: -20px;
`;

export class DetailsPlaylist extends React.Component {

    render() {
        const tracks = this.props.songs.map((track) => {
            return (
                <Music key={track.id}>
                    <li>{track.name}</li>
                    <PlayAudio link={track.url} />
                </Music>
            )
        })

        return (
            <Section>
                {tracks}
            </Section>
        )
    }
}