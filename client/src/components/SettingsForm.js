import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Grid, Header, Input } from "semantic-ui-react";

class SettingsForm extends Component {
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
              label="Email"
              control="input"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="Old Password"
              control="input"
              type="password"
              value={this.state.oldPassword}
              onChange={this.handleInputChange}
            />
            <Form.Input
              label="New Password"
              control="input"
              type="password"
              value={this.state.newPassword}
              onChange={this.handleInputChange}
            />
            <Form.Input
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

SettingsForm.propTypes = {
  email: PropTypes.string,
  oldPassword: PropTypes.string,
  newPassword: PropTypes.string,
  phone: PropTypes.number
};

export default SettingsForm;
