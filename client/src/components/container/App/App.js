import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import { Topbar, VerticalSidebar } from '../../presentation/presentation.js';
import { Home, AlertFeed, CreateAlert, Settings, } from '../container.js';
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appContainer: {
        mobile: false,
      },
      sidebar: {
        visible: true,
        mobile: false,
      },
      createAlert: {
        mobile: false,
      }
    };
  }

  setMobileState = () => {
    this.setState({
      appContainer: {
        mobile: true,
      },
      sidebar: {
        width: 'very thin',
        visible: true,
        mobile: true,
      },
      createAlert: {
        mobile: true,
      },
    });
  }

  setDesktopState = () => {
    this.setState({
      appContainer: {
        mobile: false,
      },
      sidebar: {
        visible: true,
        mobile: false,
      },
      createAlert: {
        mobile: false,
      },
    });
  }

  componentDidMount() {

    const setMobileState = this.setMobileState;
    const setDesktopState = this.setDesktopState;

    if (window.innerWidth <= 490) {
      setMobileState();
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 490) {
        setMobileState();
      } else {
        setDesktopState();
      }
    });
  }

  render() {

    const mobile = this.state.appContainer.mobile;

    const AppContainer = styled.div`
      display: flex;
      min-width: 100%;
      min-height: 100vh;
      padding-left: ${ mobile ? `78px` : `170px` };
      padding-right: 21px;
      /* border: 1px solid black; */
    `;

    const Container = styled.div`

      flex: 1;
      display: flex;
      flex-direction: column;
      /* border: 1px solid black; */

    `;

    return (
      <AppContainer>
        <VerticalSidebar { ...this.state.sidebar } />
        <Container>
          <Topbar />
          { /* Add Content Here */ }
          <CreateAlert { ...this.state.createAlert } />


          { /* ................ */ }
        </Container>
      </AppContainer>

    );
  }
}
