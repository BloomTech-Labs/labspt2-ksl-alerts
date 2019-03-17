import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Divider, Label, Input, Dropdown, } from 'semantic-ui-react';

const FormLayerOne = props => {

  return (

    <Form.Group>

      <Form.Input
        id='alert-title-input'
        name='alertTitleInput'
        label='Alert Title'
        placeholder='Title'
        onChange={ props.handleChange }
        value={ props.alertTitleInput.value }
      />

      <Form.Input
        id='keyword-search-input'
        name='keywordSearchInput'
        label='Keyword Search'
        placeholder='Keyword'
        onChange={ props.handleChange }
        value={ props.keywordSearchInput.value }
      />

      <Form.Input
        id='category-search-input'
        name='categorySearchInput'
        label='Category Search'
        placeholder='Category'
        onChange={ props.handleChange }
        value={ props.categorySearchInput.value }
      />

    </Form.Group>

  );
}

const FormLayerTwo = props => {

  const LayerContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  `;

  const Container = styled.div`



  `;

  const Label = styled.label`

    font-weight: bold;

  `;

  const sellerTypeValue = props.sellerTypeRadio.value;
  const photosValue     = props.photosRadio.value;

  return (
    <LayerContainer>

      <Container>
        <Label>Seller Type</Label>
        <Form.Group>
          <Form.Radio
            id='seller-type-private-radio'
            name='sellerTypeRadio'
            label='Private'
            value='private'
            checked={ sellerTypeValue === 'private' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='seller-type-business-radio'
            name='sellerTypeRadio'
            label='Business'
            value='business'
            checked={ sellerTypeValue === 'business' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='seller-type-all-radio'
            name='sellerTypeRadio'
            label='All'
            value='all'
            checked={ sellerTypeValue === 'all' }
            onChange={ props.handleChange }
          />

        </Form.Group>
      </Container>

      <Container>
        <Label>Photos</Label>
        <Form.Group>

          <Form.Radio
            id='photos-has-photos-radio'
            name='photosRadio'
            label='Has Photos'
            value='has photos'
            checked={ photosValue === 'has photos' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='photos-no-photos-radio'
            name='photosRadio'
            label='No Photos'
            value='no photos'
            checked={ photosValue === 'no photos' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='photos-all-radio'
            name='photosRadio'
            label='All'
            value='all'
            checked={ photosValue === 'all' }
            onChange={ props.handleChange }
          />

        </Form.Group>
      </Container>

    </LayerContainer>
  );
}

const FormLayerThree = props => {

  // NOTE: Had to use inline styles for this. Styled components causes an issue for some reason.
  const style = {
    fieldContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '141px',
      marginLeft: '7px',
    }
  }

  const Label = styled.label`

    font-weight: bold;

  `;

  const options = [
    { key: 'exact', text: 'Exact', value: 'exact' },
    { key: '10',    text: '10',    value: '10',   },
    { key: '25',    text: '25',    value: '25',   },
    { key: '50',    text: '50',    value: '50',   },
    { key: '100',   text: '100',   value: '100'   },
    { key: '150',   text: '150',   value: '150',  },
    { key: '200',   text: '200',   value: '200',  },
    { key: '201+',  text: '201+',  value: '201+', },
  ];

  return (
    <Form.Group>
      <div style={ style.fieldContainer }>
        <Label>Price Range</Label>
        <Input
          id='price-range-from-input'
          name='priceRangeFromInput'
          fluid
          label='$'
          placeholder='From'
          type='number'
          value={ props.priceRangeFromInput.value}
          onChange={ props.handleChange }
        />
      </div>

      <div style={ style.fieldContainer }>
        <Input
          id='price-range-to-input'
          name='priceRangeToInput'
          fluid
          label='$'
          placeholder='To'
          type='number'
          value={ props.priceRangeToInput.value }
          onChange={ props.handleChange }
        />
      </div>

      <div style={ style.fieldContainer }>
        <Form.Input
          id='zip-input'
          name='zipInput'
          fluid
          label='Zip'
          placeholder=''
          value={ props.zipInput.value }
          onChange={ props.handleChange }
        />
      </div>

      <div style={ style.fieldContainer }>
        <Label>Distance From</Label>
        <Dropdown
          selection
          fluid
          options={ options }
          value={ props.distanceFromDropdown.value || '25' }
          onChange={ props.handleDistanceFromDropdownChange }
        />
      </div>

    </Form.Group>
  );
}

const FormLayerFour = props => {

  const LayerContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  `;

  const Container = styled.div`



  `;

  const Label = styled.label`

    font-weight: bold;

  `;

  const { value } = props.listingTypeRadio;

  return (
    <LayerContainer>

      <Container>
        <Label>Listing Type</Label>
        <Form.Group>
          <Form.Radio
            id='listing-type-for-sale-radio'
            name='listingTypeRadio'
            label='For Sale'
            value='for sale'
            checked={ value === 'for sale' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-type-in-search-of-radio'
            name='listingTypeRadio'
            label='In Search Of'
            value='in search of'
            checked={ value === 'in search of' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-type-for-rent-radio'
            name='listingTypeRadio'
            label='For Rent'
            value='for rent'
            checked={ value === 'for rent' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-type-all-radio'
            name='listingTypeRadio'
            label='All'
            value='all'
            checked={ value === 'all' }
            onChange={ props.handleChange }
          />
        </Form.Group>
      </Container>

    </LayerContainer>
  );
}

const FormLayerFive = props => {

  const LayerContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  `;

  const Container = styled.div`



  `;

  const Label = styled.label`

    font-weight: bold;

  `;

  const { value } = props.listingPostedRadio;

  return (
    <LayerContainer>

      <Container>
        <Label>Listing Posted</Label>
        <Form.Group>

          <Form.Radio
            id='listing-posted-1-hour-radio'
            name='listingPostedRadio'
            label='1 Hour'
            value='1 hour'
            checked={ value === '1 hour' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-posted-1-day-radio'
            name='listingPostedRadio'
            label='1 Day'
            value='1 day'
            checked={ value === '1 day' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-posted-7-days-radio'
            name='listingPostedRadio'
            label='7 Days'
            value='7 days'
            checked={ value === '7 days' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-posted-30-days-radio'
            name='listingPostedRadio'
            label='30 Days'
            value='30 days'
            checked={ value === '30 days' }
            onChange={ props.handleChange }
          />

          <Form.Radio
            id='listing-posted-all-radio'
            name='listingPostedRadio'
            label='All'
            value='all'
            checked={ value === 'all' }
            onChange={ props.handleChange }
          />
        </Form.Group>
      </Container>

    </LayerContainer>
  );
}

const CreateAlertForm = props => {

  const style = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
    }
  }

  return (
    <Form style={ style.formContainer }>

      <FormLayerOne
        { ...props }
      />

      <FormLayerTwo
        { ...props }
      />

      <FormLayerThree
        { ...props }
      />

      <FormLayerFour
        { ...props }
      />

      <FormLayerFive
        { ...props }
      />

    </Form>
  );
}

export default CreateAlertForm;
