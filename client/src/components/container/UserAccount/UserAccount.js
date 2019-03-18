import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignUpForm, SignInForm, } from '../../presentation/presentation.js';

class UserAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const { form } = this.props;

    return (
      <>
        { form === 'SignIn' && <SignInForm /> }
        { form === 'SignUp' && <SignUpForm /> }
      </>
    );
  }
}

UserAccount.propTypes = {
  form: PropTypes.string.isRequired,
}

export default UserAccount;
