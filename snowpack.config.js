// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    components: './src/components',
    pages: './src/pages',
    db: './src/db',
    api: './src/api',
    app: './src/app',
    react: 'preact/compat',
    'react-dom': 'preact/compat'
  },
  mount: {
    public: '/',
    src: '/src'
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@prefresh/snowpack',
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {},
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    baseUrl: '/04232021',
    metaUrlPath: 'snowpack',
    jsxFragment: 'Fragment',
    jsxInject: "import { html as h } from 'htm/preact'"
  }
};
