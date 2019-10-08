const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
const withPlugins = require('next-compose-plugins');
const withProgressBar = require('next-progressbar');
const withTranspileModules = require('next-transpile-modules');

const plugins = [
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },
    },
  ],
  withProgressBar,
  [withTranspileModules, { transpileModules: ['debug'] }],
];

const nextConfig = {
  assetPrefix: '',
  useFileSystemPublicRoutes: false,
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }
    );
    return config;
  },
};

module.exports = withPlugins([...plugins], nextConfig);
