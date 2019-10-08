// https://github.com/zeit/next.js/tree/canary/examples/with-universal-configuration

// ONLY ENVIRONMENT VARIABLES THAT ARE NEEDED LOCALLY DURING DEVELOPMENT SHOULD GO IN HERE

// NOTE: Since our code is transpiled during the build process, any environment variables
// will be null in our build artifacts that are used in our non-local environments.

const envVars = ['NODE_ENV', 'REDUX_VERBOSE_LOGGING'].reduce((obj, key) => {
  // eslint-disable-next-line no-param-reassign
  obj[`process.env.${key}`] = process.env[key];
  return obj;
}, {});

module.exports = { ...envVars };
