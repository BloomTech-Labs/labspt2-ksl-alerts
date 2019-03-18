import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SignUpForm, SignInForm, } from '../../presentation/presentation.js';

class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderForm: this.props.renderForm,
      signInUsernameInput: {
        value: '',
      },
      signInPasswordInput: {
        value: '',
      },
      signUpUsernameInput: {
        value: '',
      },
      signUpEmailInput: {
        value: '',
      },
      signUpPasswordInput: {
        value: '',
      },
      signUpReTypePasswordInput: {
        value: '',
      },
    };
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: {
        value: e.target.value,
      }
    });
  }



  handleSubmit = e => {
    e.preventDefault();

    const { renderForm, } = this.props;

    if (renderForm === 'SignUp') {
       this.signUp({
        username: this.state.signUpUsernameInput.value,
        email: this.state.signUpEmailInput.value,
        password: this.state.signUpPasswordInput.value,
      });
    }

    if (renderForm === 'SignIn') {
      this.signIn({
        username: this.state.signInUsernameInput.value,
        password: this.state.signInPasswordInput.value,
      });
    }

  }

  signIn = info => {

  }

  signUp = info => {

    axios.post('http://localhost:8080/api/users/signup', info)
         .then(res => {
           const token = res.data.token;
           if (token) {
             localStorage.setItem('ALERTIFI-USER-AUTHENTICATION-TOKEN', token);
             this.props.authenticate(token);
             document.querySelector(`#sidebar-Home-link`).click();
           } else {
             alert('Unable to authenticate');
           }
         }).catch(err => {
           console.log(err);
         });
  }


  render() {

    const { renderForm } = this.state;

    return (
      <>
        { renderForm === 'SignIn' && <SignInForm { ...this.state.signInForm } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } /> }
        { renderForm === 'SignUp' && <SignUpForm { ...this.state.signUpForm } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } /> }
      </>
    );
  }
}

UserAccount.propTypes = {
  renderForm: PropTypes.string.isRequired,
}

export default UserAccount;
