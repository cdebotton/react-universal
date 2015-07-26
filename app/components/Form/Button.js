import React, {Component, PropTypes} from "react";
import StyleSheet from "./Button.styl";
import classNames from "classnames";

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  static defaultProps = {
    type: "button",
    children: "Done"
  }

  render() {
    const {type, children, className, ...rest} = this.props;
    const cx = classNames([StyleSheet.button, className]);

    return (
      <button type={type}
              className={cx}
              {...rest}>
        <span className={StyleSheet.label}>
          {children}
        </span>
      </button>
    );
  }
}

export class Submit extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  static defaultProps = {
    type: "submit",
    children: "Submit"
  }

  render() {
    return (
      <Button {...this.props} />
    );
  }
}

export class Reset extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
  }

  static defaultProps = {
    type: "reset",
    children: "Reset"
  }

  render() {
    return (
      <Button {...this.props} />
    );
  }
}

