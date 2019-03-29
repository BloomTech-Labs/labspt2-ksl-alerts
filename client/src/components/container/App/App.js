import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import axios from 'axios';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, } from 'react-router-dom';
import { Topbar, VerticalSidebar, SignedInModal, } from '../../presentation/presentation.js';
import { Home, AlertFeed, CreateAlert, Settings, UserAccount, } from '../container.js';
import { appUrl, googleDiscoveryDocUrl, } from '../../../constants.js';
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      signedInModal: {
        open: false,
      },
      authorization: {
        type: '',
        token: '',
      },
      user: {
        _id: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        accountType: 'standard',
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

  getSearchParams = () => {

    let searchParamsString = window.location.search.substring(1, window.location.search.length);
    searchParamsString = searchParamsString.split('&');

    const searchParamsArr = searchParamsString.map((param) => {
      return param.split('=');
    });

    const searchParams = {};

    for (let i in searchParamsArr) {
      searchParams[searchParamsArr[i][0]] = searchParamsArr[i][1];
    }

    return searchParams;
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

  authenticate = (authorization) => {

    const { token, type } = authorization;

    if (token) {

      localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TYPE', type);
      localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', token);

      this.setState({ 
        signedIn: true, 
        authorization: {
          type,
          token,
        }, 
      });

      document.querySelector(`#sidebar-Home-link`).click();
    } else {
      alert('Unable to authenticate');
    }
  }

  signOut = () => {
    this.setState({
      signedIn: false,
      authorization: {
        type: '',
        token: '',
      },
    });
    localStorage.removeItem('ALERTIFI-USER-AUTHENTICATION-TYPE');
    localStorage.removeItem('ALERTIFI-USER-AUTHENTICATION-TOKEN');
  }

  authenticateGoogleuser = () => {

  }

  authenticateGitHubUser = () => {

  }

  authenticateOAuthUser = () => {

    const searchParams = this.getSearchParams();

    // Auth user after signing in receiving access token.
    const { success, access_token, } = searchParams;
    const authType = searchParams.type;

    if (success == 'true') {

      switch (authType) {
        case 'google':

          axios({
            method: 'get',
            url: googleDiscoveryDocUrl,
          }).then(result => {

            axios({
              method: 'get',
              url: result.data.userinfo_endpoint,
              headers: {
                'Authorization': 'Bearer ' + access_token,
              }
            })
            .then(res => {
              
              const data = {
                username: res.data.name,
                email: res.data.email,
                authType,
              };

              axios({
                method: 'post',
                url: `${ appUrl }/oauth/signin`,
                headers: {
                  'Authorization': access_token,
                },
                data,
              }).then(res => {

                const authorization = {
                  token: res.headers.authorization,
                  type: authType,
                };
  
                const user = res.data;
  
                this.setState({
                  signedIn: true,
                  authorization,
                  user,
                });
  
                localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', authorization.token);
                localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TYPE', authorization.type);

              }).catch(console.log);
            }).catch(console.log);
          }).catch(console.log);

          break;
        case 'github':

          axios({
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
              'Authorization': 'token ' + access_token,
            },
          }).then(res => {

            const data = {
              _id: res.data.id,
              username: res.data.login,
              email: res.data.email,
              authType,
            };

            axios({
              method: 'post',
              url: `${ appUrl }/oauth/signin`,
              headers: {
                'Authorization': access_token,
              },
              data,
            }).then(res => {

              const authorization = {
                token: res.headers.authorization,
                type: authType,
              };

              const user = res.data;

              this.setState({
                signedIn: true,
                authorization,
                user,
              })

              localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', authorization.token);
              localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TYPE', authorization.type);

            }).catch(console.log);

          }).catch(console.log);

          break;
        default: 
          break;
      }

      this.setState({
        signedInModal: {
          open: true,
        }
      });

    }
  }

  verifyOAuthUser = () => {

    // Auth user if app is refreshed or re opened and token still exists in storage.
    const authorization = {
      type: localStorage.getItem('ALERTIFI-USER-AUTHENTICATION-TYPE'),
      token: localStorage.getItem('ALERTIFI-USER-AUTHENTICATION-TOKEN'),
    };

    const { type, token, } = authorization;

    if (token) {

      switch (type) {
        case 'alertifi':

          axios.get(appUrl + '/api/users/verify', { headers: { 'Authorization': token, }})
            .then(res => {
              const user = res.data;
              this.setState({ signedIn: true, authorization, });
              this.setState({ user, });
            }).catch(err => {
              console.log(err);
            })

          break;
        case 'google':

          axios({ 
            method: 'get',
            url: googleDiscoveryDocUrl,
          }).then(result => {

            axios({
              method: 'get',
              url: result.data.userinfo_endpoint,
              headers: {
                'Authorization': 'Bearer ' + token,
              }
            })
            .then(res => {
              
              console.log(res.data);

              const data = {
                username: res.data.name,
                email: res.data.email,
                authType: type,
              };

              axios({
                method: 'post',
                url: `${ appUrl }/oauth/signin`,
                headers: {
                  'Authorization': token,
                },
                data,
              }).then(res => {

                const authorization = {
                  token: res.headers['Authorization'],
                  type,
                };

                const user = res.data;

                this.setState({
                  signedIn: true,
                  authorization,
                  user,
                });

              }).catch(console.log);
            }).catch(console.log);
          }).catch(console.log);


          break;
        case 'github':

          axios({
            method: 'get',
            url: 'https://api.github.com/user',
            headers: {
              'Authorization': 'token ' + token,
            },
          }).then(res => {

            const data = {
              _id: res.data.id,
              username: res.data.login,
              email: res.data.email,
              authType: type,
            };

            axios({
              method: 'post',
              url: `${ appUrl }/oauth/signin`,
              headers: {
                'Authorization': token,
              },
              data,
            }).then(res => {

              const authorization = {
                token: res.headers['Authorization'],
                type,
              };

              const user = res.data;

              this.setState({
                signedIn: true,
                authorization,
                user,
              })

            }).catch(console.log);

          }).catch(console.log);

          break;
        default:
          break;
      }
    }
  }

  verifyAlertifiUser = () => {
    const { success, token, } = this.getSearchParams();

    if (token && success === 'true') {
      axios({
        method: 'get',
        url: `${ appUrl }/api/users/verify`,
        headers: {
          'Authorization': token,
        }
      }).then(res => {

        const user = res.data;

        localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TYPE', 'alertifi');
        localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', token);

        const authorization = {
          type: 'alertifi',
          token,
        };

        this.setState({
          signedIn: true,
          signedInModal: {
            open: true,
          },
          authorization,
          user,
        });

      }).catch(console.log);
    }
  }

  handleSignedInModal = e => {
    this.setState({
      signedInModal: {
        open: false,
      }
    });
  }

  componentDidMount() {

    this.authenticateOAuthUser();
    this.verifyOAuthUser();
    this.verifyAlertifiUser();

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
        <Router>
        <VerticalSidebar
          signedIn={ this.state.signedIn }
          signOut={ this.signOut }
          { ...this.state.sidebar }
        />

        <SignedInModal 
          { ...this.state } 
          handleClose={ this.handleSignedInModal }
          accountType={ this.state.user.accountType }
        />

        <Container>
          <Topbar />

            <Route
              path='/Home'
              render={ () => <Home /> }
            />

            <Route
              path='/AlertFeed'
              render={ () => <AlertFeed /> }
            />

            <Route
              path="/CreateAlert"
              render={ () => <CreateAlert { ...this.state.createAlert } /> }
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

        </Container>
        </Router>
      </AppContainer>
    );
  }
}
