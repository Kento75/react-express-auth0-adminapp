import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Provider
} from 'react-redux';
import rootReducer from './store/reducers/index';
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

require('dotenv').config();

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render( <
  Provider store = {
    store
  } >
  <
  App / >
  <
  /Provider>,
  document.getElementById('root')
);