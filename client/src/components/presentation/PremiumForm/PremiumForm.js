import React from 'react';
import { injectStripe, CardElement, CardNumberElement, 
        CardExpiryElement, CardCVCElement, PostalCodeElement, 
        IdealBankElement, } from 'react-stripe-elements';
import { style, } from './style/inline/inline.js';
import './style/css/PremiumForm.css';

const PremiumForm = props => {

  return (
    <form className='premium-form'>

    <div className='premium-form-input-container'>

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

      </div>

    </form>
  );
}

export default injectStripe(PremiumForm);