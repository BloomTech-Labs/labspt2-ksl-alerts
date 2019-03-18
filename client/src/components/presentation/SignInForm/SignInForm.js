import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignInForm = props => {
  return (
    <Form as={ FormContainer }>
      Sign In
    </Form>
  );
}

SignInForm.propTypes = {

};

export default SignInForm;

const FormContainer = styled.form`

  border: 1px solid black;

`;
