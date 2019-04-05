// ForgotPasswordForm.js -- Form for letting a user reset their password
import React from 'react';
import { Segment, Form, Input, Label, Button, Divider, Icon, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from './style/inline/inline.js';


const ForgotPasswordForm = props => {

		return (
			<Segment style={ style.segment }>
				<Form>
					{ /* Form Header */ }
					<h2 style={ style.formHeader }>Forgot Password?</h2>
					<h6>Your account is moments away</h6>
						<Form.Field
							style={ style.inputContainer }
							error="ERROR"
						>
							<label>
								Enter your email to continue
							</label>
							
							{/* Email Input Box */}
							<Input
								id='forgot-password-email-input'
								name='forgotPasswordEmailInput'
								fluid
								placeholder='Enter your email'
								type='email'
								icon={ null }
								value={ null }
								onChange={ null }
								onBlur={ null }
								loading={ null }
								
							/>
							
						</Form.Field>
						
						{/* Email Send Button 
								- Replace all { null } with true values / proptypes
						*/}
						<Form.Field
							style={ style.buttonContainer }
						>
							<Button
								id='alertifi-forgot-password-button'
								name='alertifiForgotPasswordButton'
								content='Send Verification Email'
								fluid
								positive
								icon='forgot-password'
								labelPosition='left'
								onClick={ null }
								disabled={ null }
														
							/>
							<Menu>
									<Menu.Item as={ Link } to='/SignIn' 
									 style={ style.menuItemContainer} >
										Return to Sign In
									</Menu.Item>
								</Menu>	
						</Form.Field>
						
				{/* Form Ends Here */}		
				</Form>
			</Segment>
		);
	
};

ForgotPasswordForm.propTypes = {

};

export default ForgotPasswordForm;

