import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Login from '../client/src/components/Login.jsx';

import routes from '../client/src/constants/routesHandler.js';

function renderer(req) {

  const context = {};
  // const state = store.getState();

  const content = renderToString(
      <Router context={context} location={req.path} query={req.query}>
          <div className="wrapper">{renderRoutes(routes)}</div>
      </Router>
  );

  const jsx = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
      <div id="app">${content}</div>
      <script src="./spriseBundle.js"></script>
    </body>
    </html>`;

  return {jsx, context};
}

export default renderer;