process.env.NODE_ENV = 'test';

const { playwrightLauncher } = require('@web/test-runner-playwright');

module.exports = {
  coverage: false,
  files: './src/**/*.test.jsx',
  nodeResolver: true,
  plugins: [require('@snowpack/web-test-runner-plugin')()],
  playwright: true,
  browsers: [playwrightLauncher({ product: 'firefox' })],
  watch: false,
  debug: false
};
