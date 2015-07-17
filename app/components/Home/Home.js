import React, { Component, PropTypes } from "react";
import DocumentTitle from "react-document-title";
import StyleSheet from "./Home.styl";

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.any,
    counter: PropTypes.number.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <DocumentTitle title="Home &mdash; React Universal">
        <div className={ StyleSheet.container }>
          <h2>Home</h2>
          <div>
            <p><strong>Counter: </strong> { this.props.counter }</p>
            <button type="button"
                    onClick={ () => this.props.up() }>
              Up
            </button>
            <button type="button"
                    onClick={ () => this.props.down() }>
              Down
            </button>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
