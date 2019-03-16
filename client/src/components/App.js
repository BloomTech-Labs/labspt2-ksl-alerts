import React, { Component } from "react";
import Landing from "./Landing";
import "./App.css";
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
