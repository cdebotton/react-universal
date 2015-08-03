import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

export default class Layout extends Component {
  static propTypes = {
    js: PropTypes.arrayOf(PropTypes.string).isRequired,
    css: PropTypes.arrayOf(PropTypes.string).isRequired,
    markup: PropTypes.string.isRequired,
    payload: PropTypes.object.isRequired
  }

  render() {
    const scripts = this.renderScripts();
    const styles = this.renderStyles();
    const payload = this.renderPayload();

    return (
      <html>
      <head>
        <title>{DocumentTitle.rewind()}</title>
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

  renderPayload() {
    const payload = JSON.stringify(this.props.payload);

    return (
      <script
        id="__payload__"
        type="application/json"
        dangerouslySetInnerHTML={{__html: payload}} />
    );
  }

  renderScripts() {
    return this.props.js.map((src, key) => (
      <script
        key={key}
        src={src} />
    ));
  }

  renderStyles() {
    return this.props.css.map((href, key) => (
      <link
        key={key}
        rel="stylesheet"
        href={href} />
    ));
  }
}
