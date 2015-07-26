import React, {Component, PropTypes} from "react";
import {Mixin as Formsy} from "formsy-react";
import classNames from "classnames";
import mixin from "../../decorators/mixin";
import StyleSheet from "./Input.styl";

const {addons: {CSSTransitionGroup}} = require("react/addons");

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
    const cx = classNames([StyleSheet.container, this.props.className, {
      [StyleSheet.error]: this.showError(),
      [StyleSheet.required]: this.showRequired()
    }]);

    const {label, ...rest} = this.props;

    return (
      <span className={cx}>
        <input {...rest}
               className={StyleSheet.input}
               type="text"
               onChange={::this.handleChange}
               value={this.getValue()} />
        <CSSTransitionGroup transitionName="label"
                            className={StyleSheet.labelWrapper}>
          {!this.state.empty && (
            <span className={StyleSheet.label}
                  key="label">
              {label}
            </span>
          )}
          {this.showError() && (
            <span key="error"
                  className={StyleSheet.errorLabel}>
              {this.getErrorMessage()}
            </span>
          )}
        </CSSTransitionGroup>
      </span>
    );
  }
}
