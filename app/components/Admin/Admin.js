import React, {Component, PropTypes} from "react";
import DocumentTitle from "react-document-title";
import {Connector} from "react-redux";
import classNames from "classnames";
import StyleSheet from "./Admin.styl";
import AdminNavigation from "../AdminNavigation";

class Admin extends Component {
  render() {
    const cx = classNames([StyleSheet.container, {
      [StyleSheet.navOpen]: this.props.navOpen
    }]);

    return (
      <DocumentTitle title="Admin &mdash; debotton.io">
        <div className={cx}>
          <AdminNavigation />
          <div className={StyleSheet.outlet}>
            {this.props.children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default class AdminContainer extends Component {
  render() {
    return (
      <Connector select={({adminUi}) => ({adminUi})}>
        {({dispatch, adminUi}) => {
          return (
            <Admin {...adminUi}
                   {...this.props} />
          );
        }}
      </Connector>
    );
  }
}
