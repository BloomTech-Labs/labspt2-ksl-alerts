import React from "react";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VerticalSidebar = props => {
  const { visible, width } = props;

  return (
    <Sidebar
      as={Menu}
      animation={"push"}
      direction={"left"}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width={width}
    >
      {/* LOGO */}
      <LogoContainer>
        <LogoText>Alertifi</LogoText>
      </LogoContainer>

      <Menu.Item as={MenuItem}>
        <Icon name="home" />
        Home
      </Menu.Item>

      <Menu.Item as={MenuItem}>
        <Icon name="exclamation" />
        Alert Feed
      </Menu.Item>

      <Menu.Item as={MenuItem}>
        <Icon name="plus" />
        Create Alert
      </Menu.Item>

      <Menu.Item as={MenuItem}>
        <Icon name="cog" />
        Settings
      </Menu.Item>

      <Menu.Item as={MenuItem}>
        <Icon name="sign-out" />
        Sign Out
      </Menu.Item>
    </Sidebar>
  );
};

VerticalSidebar.propTypes = {
  width: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
};

export default VerticalSidebar;

// Styled Components.
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

const MenuItem = styled.a``;
