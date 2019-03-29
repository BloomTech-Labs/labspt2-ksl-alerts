import React from 'react';
import { Form, Segment, Button, } from 'semantic-ui-react';
import { injectStripe, CardElement, CardNumberElement, 
        CardExpiryElement, CardCVCElement, PostalCodeElement, 
        IdealBankElement, PaymentRequestButtonElement, } from 'react-stripe-elements';
import { style, } from './style/inline/inline.js';
import './style/css/PremiumForm.css';

const PremiumForm = props => {

  return (
    <form 
      className='premium-form'
    >


    
    <div className='premium-form-group'>

    { /* Name on card */ }
      <Form.Input
        fluid
        placeholder='Name on card'
        label='Name on card'
        className='premium-form-name-input'
      />

    </div>



    <div className='premium-form-group'>

      { /* Card Number */ }
      <div>
        <label>Card Number</label>
        <CardNumberElement 
          className='premium-form-input premium-form-card-element'
          placeholder='#### #### #### ####'
        />
      </div>


      { /* Expiry Date */ }
      <div>
        <label>Exp. Date</label>
        <CardExpiryElement className='premium-form-input premium-form-expiry-element' />
      </div>

      </div>

      <div className='premium-form-group'>
        
        {/* Zip */ }
        <div>
          <label>Zip</label>
          <PostalCodeElement 
            placeholder='Zip'
            className='premium-form-input premium-form-postal-code-element' 
          />
        </div>

        { /* CVC */ }
        <div>
          <label>CVC</label>
          <CardCVCElement 
            className='premium-form-input premium-form-cvc-element' 
          />
        </div>
      
      </div>

      { /* Submit Button */ }
      <div className='premium-form-group'>
        <Button
          id='premium-form-submit-button'
          name='premiumFormSubmitButton'
          className='premium-form-submit-button'
          content='Submit'
          primary
        />
      </div>

    </form>
  );
}

export default injectStripe(PremiumForm);