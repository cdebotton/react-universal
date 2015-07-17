import React, { Component, PropTypes } from "react";
import DocoumentTitle from "react-document-title";

export default class HTMLDocument extends Component {
  static propTypes = {
    markup: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    js: PropTypes.array.isRequired,
    css: PropTypes.array.isRequired
  }

  getJavascripts() {
    return this.props.js.map((src, key) => (
      <script key={key}
              src={src} />
    ));
  }

  getStylesheets() {
    return this.props.css.map((href, key) => (
      <link key={key}
            rel="stylesheet"
            href={href} />
    ));
  }

  render() {
    const javascripts = this.getJavascripts();
    const stylesheets = this.getStylesheets();
    const payload = JSON.stringify(this.props.store);

    return (
      <html lang="en">
      <head>
        <title>{DocoumentTitle.rewind()}</title>
        {stylesheets}
      </head>
      <body>
        <div id="application"
             dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script id="__initialPayload__"
                type="application/json"
                dangerouslySetInnerHTML={{__html: payload }} />
        {javascripts}
      </body>
      </html>
    );
  }
}
