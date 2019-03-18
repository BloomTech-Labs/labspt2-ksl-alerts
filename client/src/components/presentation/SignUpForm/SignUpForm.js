import React from 'react';
import { Form, } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormLayerOne = props => {

  return (
    <Form.Group>

      <FieldContainer>
        <Form.Input
          id='sign-up-username-input'
          name='signUpUsernameInput'
          fluid
          label='Username'
          placeholder='Username'
          type='text'
          value={ props.signUpUsernameInput }
          onChange={ props.handleChange }
        />
      </FieldContainer>

      <FieldContainer>
        <Form.Input
          id='sign-up-email-input'
          name='signUpEmailInput'
          fluid
          label='Email'
          placeholder='Email'
          type='email'
          value={ props.signUpEmailInput }
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
          id='sign-up-password-input'
          name='signUpPasswordInput'
          fluid
          label='Password'
          placeholder='Password'
          type='password'
          value={ props.signUpPasswordInput }
          onChange={ props.handleChange }
        />
      </FieldContainer>

      <FieldContainer>
        <Form.Input
          id='sign-up-re-type-password-input'
          name='signUpReTypePasswordInput'
          fluid
          placeholder='Re-Type Password'
          type='password'
          value={ props.signUpReTypePasswordInput }
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
          disabled={ false }
          type='submit'
          onClick={ props.handleSubmit }
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
        handleChange={ props.handleChange }
        handleSubmit={ props.handleSubmit }
      />

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
