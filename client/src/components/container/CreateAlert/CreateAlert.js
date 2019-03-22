import React, { Component } from 'react';
import { CreateAlertForm, } from '../../presentation/presentation.js';

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
      zipInput: {
        value: '',
      },
      distanceFromDropdown: {
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

  handleChange = e => {
    this.setState({
      [e.target.name]: {
        value: e.target.value,
      }
    });
  }

  handleDistanceFromDropdownChange = (e, { value }) => {

    this.setState({
      distanceFromDropdown: {
        value,
      }
    });
  }

  render() {
    return (
      <>
        <CreateAlertForm
          { ...this.state }
          { ...this.props }
          handleChange={ this.handleChange }
          handleDistanceFromDropdownChange={ this.handleDistanceFromDropdownChange }
        />
      </>
    );
  }
}

export default CreateAlert;
