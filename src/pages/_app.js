import App from 'next/app';
import React from 'react';
import Routes from '../routes';

import withRedux from '../withRedux';
import withContainer from '../withContainer';
import withError from '../withError';

class MyApp extends App {
  static async getInitialProps(context) {
    const { Component, ctx } = context;

    const tasks = await Promise.all([Component.getInitialProps && Component.getInitialProps(ctx)]);

    const [props] = tasks;
    const url = Routes.match(ctx.asPath);

    return { ...props, url };
  }

  render() {
    const { Component, ...props } = this.props;
    return <Component {...props} />;
  }
}

export default withRedux(withContainer(withError(MyApp))); // order of HOCs is important
