import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import fetch from 'isomorphic-unfetch'; // eslint-disable-line

// @see env-config.js for env vars.
const isDev = process.env.NODE_ENV === 'development';

const middleware = [thunk];

if (isDev) {
  // eslint-disable-next-line global-require
  middleware.push(require('redux-immutable-state-invariant').default());
}

const isReduxLogger = process.env.REDUX_VERBOSE_LOGGING === 'true';
if (isReduxLogger) {
  middleware.push(
    createLogger({
      collapsed: true,
      diff: true,
      predicate: (getState, action) => process.browser, // client logging only
    })
  );
}

export default initialState =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
