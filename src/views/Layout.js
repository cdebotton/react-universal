import React, {Component, PropTypes} from 'react';

export default class Layout extends Component {
  static propTypes = {
    js: PropTypes.array,
    css: PropTypes.array,
    markup: PropTypes.string.isRequired,
    payload: PropTypes.object.isRequired,
  }

  static defaultProps = {
    js: [],
    css: [],
  }

  renderStyles() {
    return this.props.css.map((href, key) => (
      <link
        key={key}
        rel="stylesheet"
        href={`/build/${href}`} />
    ));
  }

  renderScripts() {
    return this.props.js.map((src, key) => (
      <script
        key={key}
        src={`/build/${src}`} />
    ));
  }

  renderPayload() {
    const payload = JSON.stringify(this.props.payload);

    return (
      <script
        id="__payload__"
        type="application/json"
        dangerouslySetInnerHTML={{__html: payload}} />
    );
  }

  render() {
    const styles = this.renderStyles();
    const scripts = this.renderScripts();
    const payload = this.renderPayload();

    return (
      <html lang="en">
      <head>
        <title>React/Relay/Redux Universal Starter Kit</title>
        {styles}
      </head>
      <body>
        <div
          id="mount"
          dangerouslySetInnerHTML={{__html: this.props.markup}} />
        {payload}
        {scripts}
      </body>
      </html>
    );
  }
}
