import React, {Component, PropTypes} from "react";
import {Mixin as Formsy} from "formsy-react";
import classNames from "classnames";
import mixin from "../../decorators/mixin";
import StyleSheet from "./Input.styl";

@mixin(Formsy)
export default class Input extends Component {
  state = {empty: true}

  handleChange(event) {
    const {value} = event.target;
    const empty = value.length === 0;

    this.setValue(value);
    this.setState({empty});
  }

  render() {
    const cx = classNames([StyleSheet.input, {
      [StyleSheet.error]: this.showError(),
      [StyleSheet.required]: this.showRequired()
    }]);

    const {label, ...rest} = this.props;

    return (
      <span className={cx}>
        <input {...rest}
               type="text"
               onChange={::this.handleChange}
               value={this.getValue()} />
        {!this.state.empty && (
          <span>{label}</span>
        )}
        {this.showError() && (
          <span className={StyleSheet.error}>
            {this.getErrorMessage()}
          </span>
        )}
      </span>
    );
  }
}
