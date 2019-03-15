import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Icon, } from 'semantic-ui-react';

const Topbar = (props) => {
  return (

    <TopbarContainer>
      <span>Home > Alert Feed</span>
      <Icon name='bell' size='large' fitted />
    </TopbarContainer>

  );
}

Topbar.propTypes = {

};

export default Topbar;

const TopbarContainer = styled.div`

  /* border: 1px solid black; */
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
