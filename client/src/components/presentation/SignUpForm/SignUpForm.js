import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormLayerOne = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Input
          fluid
          label='Username'
          placeholder='Username'
          type='text'
        />
      </FieldContainer>

      <FieldContainer>
        <Form.Input
          fluid
          label='Email'
          placeholder='Email'
          type='email'
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
          fluid
          label='Password'
          placeholder='Password'
          type='password'
        />
      </FieldContainer>

      <FieldContainer>
        <Form.Input
          fluid
          placeholder='Re-Type Password'
          type='password'
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
          Sign Up
        </Form.Button>
      </FieldContainer>
    </Form.Group>
  );
}

const SignUpForm = props => {
  return (
    <Form as={ FormContainer }>

      <FormLayerOne />

      <FormLayerTwo />

      <FormLayerThree />

    </Form>
  );
}

SignUpForm.propTypes = {

};

export default SignUpForm;

const FormContainer = styled.form`

  /* border: 1px solid black; */ 
  /* max-width: 600px; */
  align-self: center;

`;

const Container = styled.div`

  display: flex;
  flex-direction: row;

`;

const FieldContainer = styled.div`

  width: 200px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 65px;

`;
