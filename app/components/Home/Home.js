import React, {Component, PropTypes} from "react";
import StyleSheet from "./Home.styl";

export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    up: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={ StyleSheet.container }>
        <h2>Counter</h2>
        <p><strong>Value:</strong> {this.props.counter}</p>
        <button type="button"
                onClick={::this.props.up}>
          Up
        </button>
        <button type="button"
                onClick={::this.props.down}>
          Down
        </button>
      </div>
    );
  }
}
