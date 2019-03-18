import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormLayerOne = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Input
          label='Username'
          placeholder='Username'
        />
      </FieldContainer>

    </Form.Group>
  );
}

const FormLayerTwo = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Input
          label='Password'
          placeholder='Password'
        />
      </FieldContainer>

    </Form.Group>
  );
}

const FormLayerThree = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Button

        >
          Sign In
        </Form.Button>
      </FieldContainer>

    </Form.Group>
  );
}

const SignInForm = props => {
  return (
    <Form as={ FormContainer }>

      <FormLayerOne />

      <FormLayerTwo />

      <FormLayerThree />

    </Form>
  );
}

SignInForm.propTypes = {

};

export default SignInForm;

const FormContainer = styled.form`

  /* border: 1px solid black; */
  align-self: center;

`;

const FieldContainer = styled.div`

  width: 200px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 65px;

`;
