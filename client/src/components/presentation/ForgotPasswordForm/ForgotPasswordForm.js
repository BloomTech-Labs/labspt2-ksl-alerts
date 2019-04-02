// ForgotPassword.js -- Let's the user reset their password
import React, { Component } from 'react';
import { Segment, Form, Input, Label, Button, Divider, Icon, } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style, } from './style/inline/inline.js';


const ForgotPassword = props => {

		return (
			//<h1> FORGOT PASSWORD </h1>
			//<h1> We working baby </h1>
			<Segment style={style.Segment}>
				<Form>
					<h2 style={ style.formHeader }>Forgotten Password?</h2>
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
