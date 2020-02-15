import React from 'https://dev.jspm.io/react'
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
import { App } from './app.tsx'

export async function render() {
  let body = ReactDOMServer.renderToString(<App/>)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset=utf-8>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hi from Begin!</title>
  <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body>
  <div class="center-text">
    <img src="https://static.begin.app/starter/begin-logo.svg" style="max-width: 250px" class="center-text">
    <div style="margin-bottom: 24px">
      <h1 style="margin-bottom: 24px" class="center-text">
        Howdy, Beginner!
      </h1>
      <div id="app">${body}</div>
      <p style="margin-bottom: 8px">
        Get started by editing this file at:
      </p>
      <code>
        public/index.html
      </code>
    </div>
    <div>
      <p style="margin-bottom: 8px">
        View documentation at:
      </p>
      <a class="link" 
        href="https://docs.begin.com" 
        target="_blank">https://docs.begin.com</a>
    </div>
  </div>
  </div>
  <script type="module" src="/_static/browser.js"></script>
</body>
</html>
`
}
