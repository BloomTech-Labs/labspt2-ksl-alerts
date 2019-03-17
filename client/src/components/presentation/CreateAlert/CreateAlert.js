import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Divider, Label, Input, } from 'semantic-ui-react';

const FormLayerOne = props => {

  /*
  <Form.Group>
    <Form.Input id='alertTitleInput' label='Alert Title' placeholder='Title' onChange={ props.handleInputChange } value={ props.state.alertTitleInput.value } />
    <Form.Input id='keywordSearchInput' label='Keyword Search' placeholder='Keyword' onChange={ props.handleInputChange } value={ props.state.keywordSearchInput.value } />
    <Form.Input id='categorySearchInput' label='Category Search' placeholder='Category' onChange={ props.handleInputChange } value={ props.state.categorySearchInput.value } />
  </Form.Group>
  */

  return (

    <Form.Group>

      <Form.Input
        id='alertTitleInput'
        label='Alert Title'
        placeholder='Title'
        onChange={ props.handleInputChange }
        value={ props.state.alertTitleInput.value }
      />

      <Form.Input
        id='alertTitleInput'
        label='Alert Title'
        placeholder='Title'
        onChange={ props.handleInputChange }
        value={ props.state.alertTitleInput.value }
      />

      <Form.Input
        id='categorySearchInput'
        label='Category Search'
        placeholder='Category'
        onChange={ props.handleInputChange }
        value={ props.state.categorySearchInput.value }
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

  const sellerTypeValue = props.state.sellerTypeRadio.value;
  const photosValue     = props.state.photosRadio.value;

  return (
    <LayerContainer>

      <Container>
        <GroupLabel>Seller Type</GroupLabel>
        <Form.Group>
          <Form.Radio
            id='sellerTypePrivateRadio'
            name='sellerTypeRadio'
            label='Private'
            value='private'
            checked={ sellerTypeValue === 'private' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='sellerTypeBusinessRadio'
            name='sellerTypeRadio'
            label='Business'
            value='business'
            checked={ sellerTypeValue === 'business' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='sellerTypeAllRadio'
            name='sellerTypeRadio'
            label='All'
            value='all'
            checked={ sellerTypeValue === 'all' }
            onChange={ props.handleRadioChange }
          />

        </Form.Group>
      </Container>

      <Container>
        <GroupLabel>Photos</GroupLabel>
        <Form.Group>

          <Form.Radio
            id='photosHasPhotosRadio'
            name='photosRadio'
            label='Has Photos'
            value='has photos'
            checked={ photosValue === 'has photos' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='photosNoPhotosRadio'
            name='photosRadio'
            label='No Photos'
            value='no photos'
            checked={ photosValue === 'no photos' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='photosAllRadio'
            name='photosRadio'
            label='All'
            value='all'
            checked={ photosValue === 'all' }
            onChange={ props.handleRadioChange }
          />

        </Form.Group>
      </Container>

    </LayerContainer>
  );
}

const FormLayerThreeTest = props => {

  const InputContainer = styled.div`

    width: 140px;
    margin-left: 7px;
    border: 1px solid black;

  `;

  return (
    <Form.Group>
      <InputContainer>
        <Form.Input
          fluid
          label='Price Range'
          placeholder='From'
        />
      </InputContainer>

      <InputContainer>
        <Form.Input
          fluid
          label=''
          placeholder='To'
        />
      </InputContainer>

      <InputContainer>
        <Form.Input
          fluid
          label='Zip'
          placeholder='To'
        />
      </InputContainer>

      <InputContainer>
        <Form.Input
          fluid
          label='Distance From'
          disabled={ true }
          value={ 25 }
        />
      </InputContainer>
    </Form.Group>
  );
}

const FormLayerThree = props => {

  const LayerContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  `;

  const Container = styled.div`

    max-width: 270px;
    min-width: 150px;
    /* display: flex; */
    /* flex-direction: row; */
    flex: 1;
    border: 1px solid black;

  `;

  return (
    <LayerContainer>

      <Container>
        <GroupLabel>Price Range</GroupLabel>
          <Group>
            <Input placeholder='From' as={ TestContainer } />
            <Input placeholder='To' as= { TestContainer } />
          </Group>
      </Container>

      <Container>

          <GroupLabel>Zip</GroupLabel>
          <Group>
            <Input type='number' as={ TestContainer } />
            <Input placeholder='To' as={ TestContainer } />
          </Group>

      </Container>
    </LayerContainer>
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

  const { value } = props.state.listingTypeRadio;

  return (
    <LayerContainer>

      <Container>
        <GroupLabel>Listing Type</GroupLabel>
        <Form.Group>
          <Form.Radio
            id='listingTypeForSaleRadio'
            name='listingTypeRadio'
            label='For Sale'
            value='for sale'
            checked={ value === 'for sale' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingTypeInSearchOfRadio'
            name='listingTypeRadio'
            label='In Search Of'
            value='in search of'
            checked={ value === 'in search of' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingTypeForRentRadio'
            name='listingTypeRadio'
            label='For Rent'
            value='for rent'
            checked={ value === 'for rent' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingTypeAllradio'
            name='listingTypeRadio'
            label='All'
            value='all'
            checked={ value === 'all' }
            onChange={ props.handleRadioChange }
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

  const { value } = props.state.listingPostedRadio;

  return (
    <LayerContainer>

      <Container>
        <GroupLabel>Listing Posted</GroupLabel>
        <Form.Group>

          <Form.Radio
            id='listingPosted1HourRadio'
            name='listingPostedRadio'
            label='1 Hour'
            value='1 hour'
            checked={ value === '1 hour' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingPosted1DayRadio'
            name='listingPostedRadio'
            label='1 Day'
            value='1 day'
            checked={ value === '1 day' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingPosted7DaysRadio'
            name='listingPostedRadio'
            label='7 Days'
            value='7 days'
            checked={ value === '7 days' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingPosted30DaysRadio'
            name='listingPostedRadio'
            label='30 Days'
            value='30 days'
            checked={ value === '30 days' }
            onChange={ props.handleRadioChange }
          />

          <Form.Radio
            id='listingPostedAllRadio'
            name='listingPostedRadio'
            label='All'
            value='all'
            checked={ value === 'all' }
            onChange={ props.handleRadioChange }
          />
        </Form.Group>
      </Container>

    </LayerContainer>
  );
}

class CreateAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertTitleInput: {
        value: '',
      },
      keywordSearchInput: {
        value: '',
      },
      categorySearchInput: {
        value: '',
      },
      priceRangeFromInput: {
        value: '',
      },
      priceRangeToInput: {
        value: '',
      },
      sellerTypeRadio: {
        value: '',
      },
      photosRadio: {
        value: '',
      },
      listingTypeRadio: {
        value: '',
      },
      listingPostedRadio: {
        value: '',
      }
    };

  }

  handleInputChange = e => {

    this.setState({
      [e.target.id]: {
        value: e.target.value,
      }
    });

  }

  handleRadioChange = e => {

    console.log(e.target.name);

    this.setState({
      [e.target.name]: {
        value: e.target.value,
      }
    })
  }

  render() {

    const { value } = this.state;

    return (
      <Form as={ FormContainer }>

        <FormLayerOne
          handleInputChange={ this.handleInputChange }
          state={ this.state }
        />

        <FormLayerTwo
          handleRadioChange={ this.handleRadioChange }
          state={ this.state }
        />

        <FormLayerThreeTest />

        <FormLayerFour
          handleRadioChange={ this.handleRadioChange }
          state={ this.state }
        />

        <FormLayerFive
          handleRadioChange={ this.handleRadioChange }
          state={ this.state }
        />

      </Form>
    );
  }

}

export default CreateAlert;

const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */


  align-self: center;
  border: 1px solid black;

`;

const GroupLabel = styled.label`

  font-weight: bold;

`;

const Group = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

`;

const TestContainer = styled.div`

  width: 130px;
  min-width: 130px;
  /* border: 1px solid black; */

`;
