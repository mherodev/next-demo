import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Theme from './components/Theme';

const withContainer = App => {
  class WithContainer extends React.Component {
    static async getInitialProps(context) {
      const props = App.getInitialProps ? await App.getInitialProps(context) : {};
      return props;
    }

    render() {
      const { reduxStore } = this.props;
      return (
        <Theme>
          <Provider store={reduxStore}>
            <Head>
              <title>Next Demo</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
              />
            </Head>
            <App {...this.props} />
          </Provider>
        </Theme>
      );
    }
  }

  WithContainer.propTypes = {
    reduxStore: PropTypes.object.isRequired,
  };
  return WithContainer;
};

export default withContainer;
