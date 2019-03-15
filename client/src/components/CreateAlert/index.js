import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Divider, } from 'semantic-ui-react';

class CreateAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    const { value } = this.state;

    return (
      <Form as={ FormContainer }>
        <Form.Group>
          <Form.Input label='Alert Title' placeholder='Title' />
          <Form.Input label='Keyword Search' placeholder='Keyword' />
          <Form.Input label='Category Search' placeholder='Category' />
        </Form.Group>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>

          <div>
            <GroupLabel>Seller Type</GroupLabel>
            <Form.Group>
              <Form.Radio
                label='Private'
                value='private'
                checked={ value === 'private' }
                onChange={ null }
              />

              <Form.Radio
                label='Business'
                value='business'
                checked={ value === 'business' }
                onChange={ null }
              />

              <Form.Radio
                label='All'
                value='All'
                checked={ value === 'All' }
                onChange={ null }
              />

            </Form.Group>
          </div>

          <span style={{ display: 'block', width: '1px', height: '60px', backgroundColor: 'lightgray', border: '1px solid black;'}}></span>

          <div>
            <GroupLabel>Photos</GroupLabel>
            <Form.Group>

              <Form.Radio
                label='Has Photos'
                value='has photos'
                checked={ value === 'has photos' }
                onChange={ null }
              />

              <Form.Radio
                label='No Photos'
                value='no photos'
                checked={ value === 'no photos' }
                onChange={ null }
              />

              <Form.Radio
                label='All'
                value='all'
                checked={ value === 'all' }
                onChange={ null }
              />

            </Form.Group>
          </div>
        </div>

        <GroupLabel>Price Range</GroupLabel>
        <Form.Group>

        </Form.Group>

      </Form>
    );
  }

}

export default CreateAlert;

const FormContainer = styled.form`

  align-self: center;
  /* border: 1px solid black; */

`;

const GroupOne = styled.div`

  display: flex;
  flex-direction: column;

`;

const GroupLabel = styled.label`

  font-weight: bold;

`;
