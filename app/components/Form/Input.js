import React, {Component, PropTypes} from "react";
import {Mixin as Formsy} from "formsy-react";
import classNames from "classnames";
import mixin from "../../decorators/mixin";
import StyleSheet from "./Input.styl";

@mixin(Formsy)
export default class Input extends Component {
  handleChange(event) {
    this.setValue(event.currentTarget.value);
  }

  render() {
    const cx = classNames([StyleSheet.input, {
      [StyleSheet.error]: this.showError(),
      [StyleSheet.required]: this.showRequired()
    }]);

    return (
      <span className={cx}>
        <input {...this.props}
               type="text"
               onChange={::this.handleChange}
               value={this.getValue()} />
        {this.showError() && (
          <span className={StyleSheet.error}>
            {this.getErrorMessage()}
          </span>
        )}
      </span>
    );
  }
}
