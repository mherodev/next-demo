import React from 'react';
import PropTypes from 'prop-types';
import Styled from './Layout.Styled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Styled.DivLayout>
        <Header />
        <Styled.DivInnerLayout>{children}</Styled.DivInnerLayout>
        <Footer />
      </Styled.DivLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
