import React, { Component } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const SettingsForm = () => (
  <Grid columns={4}>
    <Grid.Column>
      <Header as="h2">Settings</Header>
      <Form>
        <Form.Field label="Email" control="input" />
        <Form.Field label="Old Password" control="input" type="password" />
        <Form.Field label="New Password" control="input" type="password" />
        <Button type="submit">Submit</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SettingsForm;
