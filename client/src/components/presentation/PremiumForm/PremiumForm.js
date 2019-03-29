import React from 'react';
import { Form, Segment, } from 'semantic-ui-react';
import { injectStripe, CardElement, CardNumberElement, 
        CardExpiryElement, CardCVCElement, PostalCodeElement, 
        IdealBankElement, } from 'react-stripe-elements';
import { style, } from './style/inline/inline.js';
import './style/css/PremiumForm.css';

const PremiumForm = props => {

  return (
    <Form 
      className='premium-form'
    >

    <Form.Group 
      className='premium-form-group'
    >
      <label>Name on card</label>
      <Form.Input
        placeholder='Name on card'
      />

    </Form.Group>



    <Form.Group className='premium-form-group'>

      { /* Card Number */ }
      <div>
        <label>Card Number</label>
        <CardNumberElement className='premium-form-input premium-form-card-element' />
      </div>


      { /* Expiry Date */ }
      <div>
        <label>Expiry Date</label>
        <CardExpiryElement className='premium-form-input premium-form-expiry-element' />
      </div>

      </Form.Group>

    </Form>
  );
}

export default injectStripe(PremiumForm);