// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//     </Provider>
  
// );

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './app/store'

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)