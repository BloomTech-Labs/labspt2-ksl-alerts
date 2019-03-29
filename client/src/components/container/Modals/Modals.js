import React, { Component } from 'react';
import { SignedInModal, BillingModal, } from '../../presentation/presentation.js';
import { Modal, } from 'semantic-ui-react';

class Modals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedInModal: {
        open: true,
      },
      billingModal: {
        open: false,
      }
    };
  }

  handleSignedInModal = e => {

    const isOpen = this.state.signedInModal.open;

    this.setState({
      signedInModal: {
        open: !isOpen,
      }
    });
  }

  handleBillingModal = e => {

    const isOpen = this.state.billingModal.open;

    this.setState({
      billingModal: {
        open: !isOpen,
      }
    })
  }

  handleGoPremiumClick = e => {
    this.setState({
      signedInModal: {
        open: false,
      },
      billingModal: {
        open: true,
      }
    });
  }

  render() {
    return (
      <>

        <SignedInModal
          { ...this.props }
          { ...this.state }
          handleClose={ this.handleSignedInModal }
          handleGoPremiumClick={ this.handleGoPremiumClick }
        />


        

        <BillingModal 
          { ...this.props }
          { ...this.state }
          handleClose={ this.handleBillingModal }
        />

      </>
    );
  }
}

export default Modals;