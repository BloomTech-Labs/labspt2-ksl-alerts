import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const SettingsForm = () => (
  <Form>
    <Form.Group>
      <Form.Field label="Email" control="input" />
      <Form.Field label="Old Password" control="input" type="password" />
      <Form.Field label="New Password" control="input" type="password" />
    </Form.Group>
  </Form>
);

export default SettingsForm;
