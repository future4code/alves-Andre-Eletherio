import React, { Component } from "react";
import styled from 'styled-components'
import SecaoMensagem from "./components/SecaoMensagem";

const SectionScreen = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #01000c;
`;

export default class App extends Component {

  render() {

    return (
      <SectionScreen>
        <SecaoMensagem />
      </SectionScreen>
    );
  }
}
