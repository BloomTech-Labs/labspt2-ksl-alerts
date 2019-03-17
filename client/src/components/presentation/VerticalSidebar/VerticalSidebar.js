import React from "react";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MenuItem = props => {

  const ItemText = styled.span`



  `;

  return (
    <Menu.Item style={{   minWidth: '0', }} as='a'>
      <Icon name={ props.icon } />
      <ItemText hidden={ props.mobile }>{ props.text }</ItemText>
    </Menu.Item>
  );
}

const VerticalSidebar = props => {

  const width = props.mobile ? 'very thin' : 'thin';

  const menuItems = [
    { icon: 'home',        text: 'Home',         },
    { icon: 'exclamation', text: 'Alert Feed',   },
    { icon: 'plus',        text: 'Create Alert', },
    { icon: 'cog',         text: 'Settings',     },
    { icon: 'sign-out',    text: 'Sign Out',     },
  ];

  const mapMenuItems = items => {
    return items.map((item, i) => {
      return (
        <MenuItem
          key={ i }
          { ...props }
          { ...item }
        />
      );
    });
  };

  return (
    <Sidebar
      as={ Menu }
      animation={"push"}
      direction={"left"}
      icon="labeled"
      inverted
      vertical
      visible={ true }
      width={width}
    >
      <LogoContainer>
        <LogoText hidden={ props.mobile }>Alertifi</LogoText>
      </LogoContainer>
      { mapMenuItems(menuItems) }
    </Sidebar>
  );
};

VerticalSidebar.propTypes = {
  mobile: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired
};

export default VerticalSidebar;

const LogoContainer = styled.div`
  height: 60px;
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.h2`
  color: white;
`;
