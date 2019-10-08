import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import ErrorPage from './pages/_error';

// Extracts a status code from a payload or payload container, or returns the code if provided.
export const getStatusCode = payload =>
  typeof payload === 'number' ? payload : get(payload, 'meta.statusCode') || get(payload, 'payload.meta.statusCode');

// Returns required props for withError to conditionally render an error page.
export const getError = payload => ({ statusCode: getStatusCode(payload) });

// Determines if a payload, payload-container or status code contains an error code.
export const isErrorCode = payload => {
  const statusCode = getStatusCode(payload);
  return statusCode && statusCode !== 200;
};

// This higher-order component handles non-200 statusCode values from getInitialProps
// e.g. If `props.statusCode` is 404, a 404 page will be rendered.
const withError = App => {
  class WithError extends React.Component {
    static async getInitialProps(context) {
      const { res } = context;
      const props = App.getInitialProps ? await App.getInitialProps(context) : {};
      let { statusCode } = props || {};

      // force client and server status codes to match
      if (res) {
        if (statusCode) {
          res.status(statusCode);
        } else {
          statusCode = res.statusCode;
        }
      }

      return { statusCode, ...props };
    }

    render() {
      const { statusCode, ...props } = this.props;
      if (isErrorCode(statusCode)) {
        return <ErrorPage statusCode={statusCode} />;
      }
      return <App {...props} />;
    }
  }

  WithError.propTypes = {
    statusCode: PropTypes.number,
  };

  WithError.defaultProps = {
    statusCode: undefined,
  };

  return WithError;
};

export default withError;
