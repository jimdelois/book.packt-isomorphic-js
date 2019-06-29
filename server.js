import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';

const server = express();
const port = process.env.PORT || 3000;

// Middleware to serve static assets (p. 21)
server.use(express.static(path.join(__dirname, 'public')));

// Baseline route (pp. 19-20)
server.get('*', (req, res) => {
  const title = 'Sample Application';
  const body = ReactDOM.renderToString(<App />);
  const html = ReactDOM.renderToStaticMarkup(<Html
    title={title}
    description="Isomorphic web application sample"
    body={body} />);

  res.send('<!doctype html>\n' + html);
});

server.listen(port, () => {
  console.log(`Node.js server is listening at http://localhost:${port}/`);
});
