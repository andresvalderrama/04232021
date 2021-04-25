// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/src'
  },
  plugins: ['@snowpack/plugin-dotenv', '@prefresh/snowpack'],
  packageOptions: {},
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    baseUrl: '/04232021',
    metaUrlPath: 'snowpack'
  }
};
