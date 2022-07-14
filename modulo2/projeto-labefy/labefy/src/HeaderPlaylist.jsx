import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("https://cdn.wallpapersafari.com/56/42/Pra97S.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 250px;
    align-items: flex-end;
    color: #ebebebdb;
    font-size: 30px;
    padding-bottom: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Img = styled.img`
    background-color: #ebebebdb;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 10px;
`;

export class HeaderPlaylist extends React.Component {

    render() {

        return (
            <Div>
                <Img src="https://images.vexels.com/media/users/3/149953/isolated/lists/52364c140c4876f5d7296471f14959f6-silhueta-de-cantor-de-banda-musical.png" alt="" />
                <h1>{this.props.playlistName}</h1>
            </Div>
        )
    }
}