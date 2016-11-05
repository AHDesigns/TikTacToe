import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { Router, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import routes from './server/createRoutes.js';
// import store from './server/createStore';

import './styles/global.scss';
import App from './page.react.js';

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>,
//   document.getElementById('wrapper')
// );

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('wrapper')
);
// 
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     // If you use Webpack 2 in ES modules mode, you can
//     // use <App /> here rather than require() a <NextApp />.
//     const NextApp = require('./App').default;
//     ReactDOM.render(
//       <AppContainer>
//          <NextApp />
//       </AppContainer>,
//       document.getElementById('wrapper')
//     );
//   });
// }
