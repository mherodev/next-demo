import React from 'react';

import Layout from '../components/Layout';

class AboutPage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    return {};
  }

  render() {
    return (
      <Layout {...this.props}>
        <div style={{ padding: '30px', background: 'aquamarine' }}>About</div>
      </Layout>
    );
  }
}

export default AboutPage;
