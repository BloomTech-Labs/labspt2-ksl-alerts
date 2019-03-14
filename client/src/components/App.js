import React, { Component } from "react";
import { Sidebar, Segment } from "semantic-ui-react";
import styled from "styled-components";
import VerticalSidebar from "./VerticalSidebar/index";
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: {
        width: "thin",
        visible: true
      }
    };
  }

  render() {
    const { visible, width } = this.state.sidebar;

    return (
      <div>
        <Sidebar.Pushable as={Container}>
          {/* SIDEBAR */}
          <VerticalSidebar visible={visible} width={width} />

          {/* PAGE CONTENT CONTAINER */}
          <Sidebar.Pusher>
            {/* CONTENT GOES HERE... */}

            <h1>Content</h1>

            {/* ...... */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  border: none;
`;
