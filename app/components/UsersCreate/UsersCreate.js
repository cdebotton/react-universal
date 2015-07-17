import React, {Component, PropTypes} from "react";
import StyleSheet from "./UsersCreate.styl";

export default class UsersCreate extends Component {
  static propTypes = {
    newUserEmail: PropTypes.string.isRequired,
    createUser: PropTypes.func.isRequired,
    cancelInitializeUser: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.cancelInitializeUser();
    this.context.router.transitionTo("/users");
  }

  render() {
    return (
      <div className={StyleSheet.container}>
        <h3>UsersCreate</h3>
        <form onSubmit={::this.handleSubmit}>
          <input type="email"
                 placeholder="Email address"
                 value={this.props.newUserEmail}
                 ref={(c) => this._email = c} />
          <input type="text"
                 placeholder="First name"
                 ref={(c) => this._firstName = c} />
          <input type="text"
                 placeholder="Last name"
                 ref={(c) => this._lastName = c} />
          <input type="password"
                 placeholder="Password"
                 ref={(c) => this._password = c} />
          <input type="password"
                 placeholder="Confirm password"
                 ref={(c) => this._confirmPassword = c} />
          <button type="submit">Save</button>
          <button type="button"
                  onClick={::this.handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
