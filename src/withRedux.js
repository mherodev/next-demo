/* eslint-disable no-underscore-dangle */
/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import initializeStore from './state/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) return initializeStore(initialState);

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

export default App => {
  class Redux extends React.Component {
    static async getInitialProps(context) {
      const reduxStore = getOrCreateStore();
      context.ctx.reduxStore = reduxStore; // eslint-disable-line no-param-reassign

      const props = App.getInitialProps ? await App.getInitialProps(context) : {};

      return {
        ...props,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  }

  Redux.propTypes = {
    initialReduxState: PropTypes.object.isRequired,
  };

  return Redux;
};
