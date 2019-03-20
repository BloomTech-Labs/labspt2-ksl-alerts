import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Field, Form, Grid, Header, Input } from "semantic-ui-react";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      oldPassword: "",
      newPassword: "",
      phone: null
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    // will need to an ajax post to update user settings
  };

  render() {
    return (
      <Grid columns={4}>
        <Grid.Column>
          <Header as="h2">Settings</Header>
          <Form>
            <Form.Input
              name="email"
              label="Email"
              control="input"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Form.Input
              name="oldPassword"
              label="Old Password"
              control="input"
              type="password"
              value={this.state.oldPassword}
              onChange={this.handleInputChange}
            />
            <Form.Input
              name="newPassword"
              label="New Password"
              control="input"
              type="password"
              value={this.state.newPassword}
              onChange={this.handleInputChange}
            />
            <Form.Input
              name="phone"
              label="Phone Number"
              control="input"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

Settings.propTypes = {
  email: PropTypes.string,
  oldPassword: PropTypes.string,
  newPassword: PropTypes.string,
  phone: PropTypes.number
};

export default Settings;
