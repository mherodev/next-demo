import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Styled from './ErrorContainer.Styled';

const lang = {
  page_not_found_title: '404',
  page_not_found_message: 'Uh Oh! We couldn’t find the page you were looking for…',
  error_title: 'Error',
  server_error: 'Sorry! There’s an internal server error.',
  client_error: 'Sorry! An error occured.',
  will_fix_message: 'We’ll get this fixed as soon as possible.',
};

const ErrorContainer = props => {
  let { statusCode } = props;
  let title;
  let message;
  let showFixMessage = false;
  switch (statusCode) {
    case 404:
      title = lang.page_not_found_title;
      message = lang.page_not_found_message;
      break;
    default:
      title = lang.error_title;
      showFixMessage = true;
      if (statusCode && statusCode !== 200) {
        message = lang.server_error;
      } else {
        statusCode = 'Error';
        message = lang.client_error;
      }
  }

  return (
    <Styled.DivWrapper>
      <Head>
        <title>Error</title>
      </Head>
      <Styled.H1Title>{statusCode}</Styled.H1Title>
      <p>{message}</p>
      {showFixMessage && <p>{lang.will_fix_message}</p>}
    </Styled.DivWrapper>
  );
};

ErrorContainer.propTypes = {
  statusCode: PropTypes.number,
};

ErrorContainer.defaultProps = {
  statusCode: null,
};

export default ErrorContainer;
