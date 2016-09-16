/* eslint-disable global-require */
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  graphql: {
    port: 4000,
  },
};

export default { ...config, ...require(`./${config.env}`).default };
