// ForgotPassword.js -- Let's the user reset their password
import React from 'react';
import { OAuthForm, } from '../presentation.js';
import { Segment, Form, Input, Label, Button, Divider, Icon, } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style, } from './style/inline/inline.js';


const ForgotPassword = props => {
	
	return (
		<Segment style={ style.Segment }>
			// Big input box that takes up the middle
			<h2> TEST </h2>
			<Form>
				// Title with embedded reference style
				<h2 style={ style.FormHeader }>Forgotten Password?</h2>
				// 
				<Form.Field
					style={ style.inputContainer }
					//error={ props.ForgotPasswordInput.error }
				>
				
				
				// Container for input
				<label
					style={ style.label }
				>
					Email
					<span
						style={ style.error }
						hidden={ props.ForgotPasswordEmailInput.label.hidden }
					>
						// { props.ForgotPasswordEmailInput.label.value }
						Dummy Data
					</span>
				</label>
				
				
				// Details for input
				<Input
					id="forgot-password-email-input"
					name="forgotPasswordEmailInput"
					fluid
					placeholder="Please enter your email..."
					type="email"
					//icon={}
					//value={}
					//onChange={}
					//onBlur={}
					//loading={}
				>
				</Input>
			</Form.Field>
		 </Form>
		</Segment>
	
	
	);

};

ForgotPassword.propTypes = {

};

export default ForgotPassword;

// User inputs email & username

// User gets sent an email

// User follows email

// Password reset screen
