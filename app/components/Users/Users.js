import React, {Component, PropTypes} from "react";
import {Form} from "formsy-react";
import {Input} from "../Form";
import StyleSheet from "./Users.styl";

export default class Users extends Component {
  state = {
    canSubmit: false
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  enableForm() {
    this.setState({canSubmit: true});
  }

  disableForm() {
    this.setState({canSubmit: false});
  }

  render() {
    return (
      <div className={StyleSheet.container}>
        <header>
          <h2>Users</h2>
          <nav className={StyleSheet.navigation}>
            <ul className={StyleSheet.navigationList}>
              <li className={StyleSheet.navigationListItem}>
                <a href="#"
                   className={StyleSheet.navigationItem}>
                  Groups
                </a>
              </li>
              <li className={StyleSheet.navigationListItem}>
                <Form onValidSubmit={::this.handleSubmit}
                      onValid={::this.enableForm}
                      onInvalid={::this.disableForm}>
                  <Input name="email"
                         validations="isEmail"
                         validationError="This is an invalid email"
                         required={true}
                         placeholder="Email" />
                  <button type="submit"
                          disabled={!this.state.canSubmit}>
                    Create user
                  </button>
                </Form>
              </li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}
