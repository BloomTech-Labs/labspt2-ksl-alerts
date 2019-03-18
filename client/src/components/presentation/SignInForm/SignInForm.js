import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormLayerOne = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Input
          id='sign-in-username-input'
          name='signInUsernameInput'
          label='Username'
          placeholder='Username'
          type='text'
          value={ props.signInUsernameInput }
          onChange={ props.handleChange }
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
          id='sign-in-password-input'
          name='signInPasswordInput'
          label='Password'
          placeholder='Password'
          type='password'
          value={ props.signInPasswordInput }
          onChange={ props.handleChange }
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
          onClick={ props.handleSubmit }
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

      <FormLayerOne
        { ...props }
        handleChange={ props.handleChange }
      />

      <FormLayerTwo
        { ...props }
        handleChange={ props.handleChange }
      />

      <FormLayerThree
        { ...props }
        handleSubmit={ props.handleSubmit }
      />

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
