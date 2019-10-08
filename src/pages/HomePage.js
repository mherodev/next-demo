import React from 'react';

import Layout from '../components/Layout';
import HomeContainer from '../pageContainers/HomeContainer';

class HomePage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    return {};
  }

  render() {
    return (
      <Layout {...this.props}>
        <HomeContainer {...this.props} />
      </Layout>
    );
  }
}

export default HomePage;
