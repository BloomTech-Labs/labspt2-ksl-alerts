import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignUpForm = props => {
  return (
    <Form as={ FormContainer }>
      Sign Up
    </Form>
  );
}

SignUpForm.propTypes = {

};

export default SignUpForm;

const FormContainer = styled.form`

  border: 1px solid black;

`;
