import React, { Component, PropTypes } from "react";
import Application from "../components/Application";
import HomeContainer from "./HomeContainer";

export default class ApplicationContainer extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const props = {
      ...this.props,
      children: this.props.children || <HomeContainer />
    };

    return (
      <Application {...props} />
    );
  }
}
