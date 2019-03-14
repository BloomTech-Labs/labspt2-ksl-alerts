import React, { Component } from "react";
import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const VerticalSidebar = props => {
  const { visible, width } = props;

  return (
    <Sidebar
      as={Menu}
      animation={"overlay"}
      direction={"left"}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width={width}
    />
  );
};

VerticalSidebar.propTypes = {
  width: PropTypes.string,
  visible: PropTypes.bool
};

export default VerticalSidebar;
