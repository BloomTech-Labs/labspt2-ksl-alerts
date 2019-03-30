import React, { Component } from 'react';
import { AlertFeedSegment, } from '../../presentation/presentation.js';

class AlertFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <>
        <AlertFeedSegment { ...this.props } />
      </>
    );
  }
}

export default AlertFeed;
