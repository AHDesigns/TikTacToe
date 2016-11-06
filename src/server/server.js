import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import store from '../client/modules/rootStore.js';
import routes from '../client/routes.js';
import { servePage } from './servePage';

const app = express();

const base = process.env.PWD;
const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(base, '/build')));

// app.get('*', (req, res) => {
//     match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//         if (error) {
//             res.status(500).send(error.message);
//         } else if (redirectLocation) {
//             res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//         } else if (renderProps) {
//             const router = (
//               <Provider store={store}>
//                 <RouterContext {...renderProps} />
//               </Provider>
//             );
//             res.status(200).send(servePage(router));
//         } else {
//             res.status(404).send('Not Found');
//         }
//     });
// });

http.createServer(app).listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
