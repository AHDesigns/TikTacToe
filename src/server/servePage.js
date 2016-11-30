// import React from 'react';
import ReactDOM from 'react-dom/server';

export function servePage(app) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Tic Tak Toe</title>
        <link rel="stylesheet" href="/css/bundle.css">
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div id="wrapper">${ReactDOM.renderToString(app)}</div>
        <script type="text/javascript" src="/js/bundle.js"></script>
      </body>
    </html>`;
}
