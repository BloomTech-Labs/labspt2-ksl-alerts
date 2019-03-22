import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, } from 'react-router-dom';
import { Topbar, VerticalSidebar } from '../../presentation/presentation.js';
import { Home, AlertFeed, CreateAlert, Settings, UserAccount, } from '../container.js';
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      authToken: '',
      user: {
        _id: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        alerts: [],
      },
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

  authenticate = (authToken) => {

    if (authToken) {
      localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', authToken);
      this.setState({ signedIn: true, authToken, });
      document.querySelector(`#sidebar-Home-link`).click();
    } else {
      alert('Unable to authenticate');
    }



  }

  signOut = () => {
    this.setState({
      signedIn: false,
      authToken: '',
    });
    localStorage.removeItem('ALERTIFI-USER-AUTHENTICATION-TOKEN');
  }

  componentDidMount() {

    const setMobileState = this.setMobileState;
    const setDesktopState = this.setDesktopState;
    const authToken = localStorage.getItem('ALERTIFI-USER-AUTHENTICATION-TOKEN');

    if (authToken) {

      axios.get('http://localhost:8080/api/users/verify', { headers: { 'Authorization': authToken, }})
           .then(res => {

             if (res.error) {
               console.log(res.error);
             }

             const { user, } = res.data;
             this.setState({ signedIn: true, authToken, });
             this.setState({ user, })
           }).catch(err => {
             console.log(err);
           })
    }

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
        <Router>
        <VerticalSidebar
          signedIn={ this.state.signedIn }
          signOut={ this.signOut }
          { ...this.state.sidebar }
        />
        <Container>
          <Topbar />
          { /* Add Content Here */ }

            <Route
              path='/Home'
              render={ () => <Home />}
            />

            <Route
              path='/AlertFeed'
              render={ () => <AlertFeed /> }
            />

            <Route
              path="/CreateAlert"
              render={ () => <CreateAlert { ...this.state.createAlert } />}
            />

            <Route
              path='/Settings'
              render={ () => <Settings /> }
            />

            <Route
              path='/SignIn'
              render={ () => <UserAccount authenticate={ this.authenticate } renderForm='SignIn' /> }
            />

            <Route
              path='/SignUp'
              render={ () => <UserAccount authenticate={ this.authenticate } renderForm='SignUp' /> }
            />

          { /* ................ */ }
        </Container>
        </Router>
      </AppContainer>
    );
  }
}
