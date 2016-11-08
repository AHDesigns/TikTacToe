import express from 'express';
import http from 'http';
import path from 'path';
import reload from 'reload';
import bodyParser from 'body-parser';
import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import mongoose from 'mongoose';
import store from '../client/modules/rootStore.js';
import routes from '../client/routes.js';
import { servePage } from './servePage';
import apiRoutes from './api/apiRoutes.js'

const app = express();

const base = process.env.PWD;
const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/react-test');

app.use(bodyParser.json());

app.use('/', express.static(path.join(base, '/build')));

app.post('/api/v1/login/store', apiRoutes.storeLogin);

app.get('*', (req, res) => {
  match({
    routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const router = (
          <Provider store={store}>
              <RouterContext {...renderProps}/>
          </Provider>
      );
      res.status(200).send(servePage(router));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

const server = http.createServer(app)

// Reload code here
// reload(server, app)

server.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
