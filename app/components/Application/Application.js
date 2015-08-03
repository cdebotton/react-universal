import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import StyleSheet from './Application.styl';

export default class Application extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <DocumentTitle title="React Universal Starter Kit">
        <div className={StyleSheet.container}>
          <header className={StyleSheet.header}>
            <h1>Hello, World!</h1>
          </header>
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}
