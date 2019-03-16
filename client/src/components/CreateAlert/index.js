import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Divider, Label, Input, } from 'semantic-ui-react';

class CreateAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertTitle: {
        value: '',
      }
    };

  }

  handleInputChange = (e) => {

  }

  render() {

    const { value } = this.state;

    return (
      <Form as={ FormContainer }>
        <Form.Group>
          <Form.Input label='Alert Title' placeholder='Title' onChange={ this.handleInputChange } value={ this.state.alertTitle.value } />
          <Form.Input label='Keyword Search' placeholder='Keyword' />
          <Form.Input label='Category Search' placeholder='Category' />
        </Form.Group>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', }}>

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
                value='all'
                checked={ value === 'all' }
                onChange={ null }
              />

            </Form.Group>
          </div>

          { /* <span style={{ display: 'block', width: '1px', height: '60px', backgroundColor: 'lightgray', border: '1px solid black;'}}></span> */ }

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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', }}>

          <div style={{ width: '270px', display: 'flex', flexDirection: 'column', }}>
            <GroupLabel>Price Range</GroupLabel>
              <Group>
                <Input placeholder='From' as={ TestContainer } />
                <Input placeholder='To' as= { TestContainer } />
              </Group>
          </div>

          <div style={{ width: '270px',  }}>
            <GroupLabel>Zip</GroupLabel>
            <Group>
              <Input type='number' as={ TestContainer } />
              <Input placeholder='To' as={ TestContainer } />
            </Group>
          </div>


        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', }}>

          <div>
            <GroupLabel>Listing Type</GroupLabel>
            <Form.Group>
              <Form.Radio
                label='For Sale'
                value='for sale'
                checked={ value === 'for sale' }
                onChange={ null }
              />

              <Form.Radio
                label='In Search Of'
                value='in search of'
                checked={ value === 'in search of' }
                onChange={ null }
              />

              <Form.Radio
                label='For Rent'
                value='for rent'
                checked={ value === 'for rent' }
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', }}>
          <div>
            <GroupLabel>Listing Posted</GroupLabel>
            <Form.Group>

              <Form.Radio
                label='1 Hour'
                value='1 hour'
                checked={ value === '1 hour' }
                onChange={ null }
              />

              <Form.Radio
                label='1 Day'
                value='1 day'
                checked={ value === '1 day' }
                onChange={ null }
              />

              <Form.Radio
                label='7 Days'
                value='7 days'
                checked={ value === '7 days' }
                onChange={ null }
              />

              <Form.Radio
                label='30 Days'
                value='30 days'
                checked={ value === '30 days' }
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
      </Form>
    );
  }

}

export default CreateAlert;

const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: space-between;


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
