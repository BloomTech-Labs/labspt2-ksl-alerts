import React from 'react';
import axios from 'axios';
import { Form, Segment, Button, } from 'semantic-ui-react';
import { injectStripe, CardElement, CardNumberElement, 
        CardExpiryElement, CardCVCElement, PostalCodeElement, 
        IdealBankElement, PaymentRequestButtonElement, } from 'react-stripe-elements';
import './style/css/PremiumForm.css';

const PremiumForm = props => {

  return (
    <Form 
      className='premium-form'
      loading={ props.premiumForm.loading }
    >
    
    <div className='premium-form-group'>

    { /* Name on card */ }
      <Form.Input
        id='premium-form-name-input'
        name='premiumFormNameInput'
        fluid
        placeholder='Name on card'
        label='Name on card'
        className='premium-form-name-input'
        type='text'
        onChange={ props.handleChange }
        value={ props.premiumFormNameInput.value }
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

      { /* Total */ }
      <div className='premium-form-total'>
        <span>Total: </span>
        <span>${ props.premiumForm.price / 100 }</span>
      </div>

      { /* Submit Button */ }
      <div className='premium-form-group'>
        <Button
          id='premium-form-submit-button'
          name='premiumFormSubmitButton'
          className='premium-form-submit-button'
          content='Submit'
          type='submit'
          primary
          loading={ props.premiumFormSubmitButton.loading    }
          disabled={ props.premiumFormSubmitButton.disabled  }
          onClick={ e => props.handleSubmit(e, props.stripe) }
        />
      </div>

    </Form>
  );
}

export default injectStripe(PremiumForm);