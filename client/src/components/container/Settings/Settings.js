import React, { Component } from 'react';
import { SettingsTabs, } from '../../presentation/presentation.js';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <>
        <SettingsTabs { ...this.state } { ...this.props } />
      </>
    );
  }
}

export default Settings;
