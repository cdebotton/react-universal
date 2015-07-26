import React, {Component, PropTypes} from "react";
import {Connector} from "react-redux";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import classNames from "classnames";
import StyleSheet from "./AdminNavigation.styl";
import * as adminUiActions from "../../actions/adminUiActions";

const nav = {
  Dashboard: "/admin",
  // Document: "/documents",
  Users: "/admin/users"
  // Settings: "/settings"
};

class AdminNavigation extends Component {
  static propTypes = {
    navOpen: PropTypes.bool.isRequired
  }

  render() {
    const cx = classNames([StyleSheet.container, {
      [StyleSheet.navOpen]: this.props.navOpen
    }]);

    const navItems = !this.props.navOpen ? [] : Object.keys(nav)
      .map((title, key) => (
        <li className={StyleSheet.navListItem}
            key={key}>
          <Link className={StyleSheet.navListItemLink}
                to={nav[title]}>
            {title}
          </Link>
        </li>
      ));

    return (
      <nav className={cx}>
        <button type="button"
                className={StyleSheet.toggle}
                onClick={() => this.props.toggleNav()}>
          <span className={StyleSheet.line} />
        </button>
        <ul className={StyleSheet.navList}>
          {navItems}
        </ul>
      </nav>
    );
  }
}

export default class AdminNavigationContainer extends Component {
  render() {
    return (
      <Connector select={({adminUi}) => ({adminUi})}>
        {({adminUi, dispatch}) => {
          const actions = bindActionCreators(adminUiActions, dispatch);
          return (
            <AdminNavigation {...adminUi} {...actions} />
          );
        }}
      </Connector>
    );
  }
}
