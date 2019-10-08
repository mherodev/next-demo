import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Layout from '../components/Layout';
import ErrorContainer from '../pageContainers/ErrorContainer';

export default class ErrorPage extends React.Component {
  static getInitialProps({ res, req, err }) {
    let statusCode = get(req, 'query.statusCode') || (res && res.statusCode);
    if (!statusCode) {
      statusCode = err ? err.statusCode : null;
    }
    return { statusCode };
  }

  render() {
    return (
      <Layout {...this.props}>
        <ErrorContainer statusCode={this.props.statusCode} />
      </Layout>
    );
  }
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};
