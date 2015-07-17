import React, {Component, PropTypes} from "react";
import StyleSheet from "./UsersIndex.styl";

export default class UsersIndex extends Component {
  static propTypes = {
    users: PropTypes.shape({
      newUserEmail: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired,
    initializeUser: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleSubmit(event) {
    const input = React.findDOMNode(this._newUserEmail);
    event.preventDefault();
    this.props.initializeUser(input.value);
    input.value = "";
    this.context.router.transitionTo("/users/create");
  }

  render() {
    return (
      <div className={StyleSheet.container}>
        <h3>UsersIndex</h3>
        <form onSubmit={::this.handleSubmit}>
          <input type="email"
                 placeholder="Email address"
                 ref={(c) => this._newUserEmail = c} />
          <button type="submit">Create user</button>
        </form>
      </div>
    );
  }
}
