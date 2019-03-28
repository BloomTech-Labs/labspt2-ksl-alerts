import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Segment, } from 'semantic-ui-react';
import { style, } from './style/inline.js';


const ModalContentStandard = props => {
  return (
    <>
      <Modal.Content>
        <div style={ style.modalContent }>
          <h3 style={ style.modalContentHeader }>Get unlimited access to all Alertifi features when you sign up for a premium membership</h3>
          <Button 
            positive
            style={ style.modalContentPremiumButton }
          >
            Go Premium!
          </Button>
        </div>
      </Modal.Content>
    </>
  );
}

const ModalContentPremium = props => {
  return (
    <> 
      <div style={ style.modalContent }>
        <h3 style={ style.modalContentHeader }>Thank you for being a premium member!</h3>
      </div>
    </>
  );
}

const SignedInModal = props => {

  return (
    <Modal
      id='signed-in-modal'
      name='signedInModal'
      style={ style.modalContainer }
      open={ props.signedInModal.open }
      closeOnEscape={ false }
      closeOnDimmerClick={ false }
      closeIcon={ false }
      onClose={ props.handleClose }
    >
      <Modal.Header style={ style.modalHeader }>
        Welcome to Alertifi!
      </Modal.Header>

     

      { props.accountType === 'standard' && <ModalContentStandard /> }
      { props.accountType === 'premium' && <ModalContentPremium /> }
      
      <Modal.Actions>
        <Button
          negative
          style={ style.modalActionsCloseButton }
          onClick={ props.handleClose }
        >
          Close
        </Button>
      </Modal.Actions>

    </Modal>
  );
}


export default SignedInModal;