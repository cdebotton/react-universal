import React, {Component, PropTypes} from "react";
import StyleSheet from "./UsersIndex.styl";

export default class UsersIndex extends Component {
  static propTypes = {
    users: PropTypes.shape({
      newUserEmail: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired
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

  getUsers() {
    const { data: users } = this.props.users;

    const userItems = Object.keys(users).map((id) => {
      const user = users[id];

      return (
        <li>{user.id} - {user.email}</li>
      );
    });

    return userItems.length > 0 ? (
      <ul>{userItems}</ul>
    ) : (
      <p>No users...</p>
    );
  }

  printErrors() {
    const errors = this.props.users.errors.map((err, key) => (
      <li key={key}>{err}</li>
    ));

    return (
      <ul>{errors}</ul>
    );
  }

  render() {
    const {errors} = this.props.users;

    return (
      <div className={StyleSheet.container}>
        <h3>UsersIndex</h3>
        <form onSubmit={::this.handleSubmit}>
          <input type="email"
                 placeholder="Email address"
                 ref={(c) => this._newUserEmail = c} />
          <button type="submit">Create user</button>
        </form>
        {errors.length ? this.getUsers() : this.printErrors()}
      </div>
    );
  }
}
