import React from 'react';

const Html = (props) =>
<html>
  <head>
    <title>{props.title || ''}</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible"
          content="ie=edge" />
    <meta name="description"
          content={props.description || ''} />
    <meta name="viewport"
          content="width=device-width, initial-scale=1" />
    <script src="/client.js" async />
  </head>
  <body>
    <div id="app"
         dangerouslySetInnerHTML={{__html: props.body}} />
  </body>
</html>;

export default Html;
