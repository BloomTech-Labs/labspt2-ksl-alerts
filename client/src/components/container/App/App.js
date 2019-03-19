import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import { CreateAlert, Topbar, VerticalSidebar } from '../../presentation/presentation.js';
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: {
        width: "thin",
        visible: true
      }
    };
  }

  render() {
    const { visible, width } = this.state.sidebar;

    return (
      <AppContainer>
        <VerticalSidebar visible={visible} width={width} />
        <Container>
          <Topbar />
          { /* Add Content Here */ }
          <CreateAlert />


          { /* ................ */ }
        </Container>
      </AppContainer>

    );
  }
}

const AppContainer = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  padding-left: 170px;
  padding-right: 21px;
  /* border: 1px solid black; */
`;

const Container = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */

`;
