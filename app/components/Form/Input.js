import React, {Component, PropTypes} from "react";
import reactMixin from "react-mixin";
import {Mixin as Formsy} from "formsy-react";
import classNames from "classnames";
import StyleSheet from "./Input.styl";

function addMixin(mixin) {
  return (reactClass) => reactMixin.onClass(reactClass, mixin);
}

function autobind(methodNames){
  return {
    componentWillMount: function() {
      methodNames.forEach((name) => {
        this[name] = this[name].bind(this);
      });
    }
  };
}

@addMixin(Formsy)
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
