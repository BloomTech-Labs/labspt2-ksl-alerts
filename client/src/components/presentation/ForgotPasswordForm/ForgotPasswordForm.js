// ForgotPassword.js -- Let's the user reset their password
import React from 'react';
import { Segment, Form, Input, Label, Button, Divider, Icon, } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style, } from './style/inline/inline.js';


const ForgotPasswordForm = props => {

		return (
			<Segment style={style.Segment}>
				<Form>
					<h2>Forgotten Password?</h2>
						<Form.Field
							// Update with actual style
							style={ style.replaceMe }
							error="ERROR"
						>
							<label>
								Email
								<span>
									Dummy Data
								</span>
							</label>
							
							<Input>
								id='forgot-password-email-input'
								name='forgotPasswordEmailInput'
								fluid
								placeholder='Enter your email'
								type='email'
								/*
								icon=...
								value=...
								onChange=...
								onBlur=...
								loading=...
								*/
								
							</Input>
							
						</Form.Field>
				</Form>
			</Segment>
		);
	
};

ForgotPasswordForm.propTypes = {

};

export default ForgotPasswordForm;

// User inputs email & username

// User gets sent an email

// User follows email

// Password reset screen
