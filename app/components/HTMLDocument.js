import React, { Component, PropTypes } from "react";
import DocumentTitle from "react-document-title";

export default class HTMLDocument extends Component {
  static propTypes = {
    markup: PropTypes.string.isRequired,
    js: PropTypes.array.isRequired,
    payload: PropTypes.string
  }

  render() {
    const { markup, js, payload } = this.props;

    return (
      <html lang="en">
      <head>
        <title>{ DocumentTitle.rewind() }</title>
      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnerHTML={{ __html: markup }} />
        <script
          type="application/json"
          id="__payloadData__"
          dangerouslySetInnerHTML={{ __html: payload }} />
        { js.map((src, key) => (
          <script key={ key } src={ src } />
        )) }
      </body>
      </html>
    );
  }
}
