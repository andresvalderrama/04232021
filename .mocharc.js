module.exports = {
  spec: 'src/**/*.test.jsx',
  watch: false,
  watchFiles: ['src/**/*.test.jsx'],
  require: ['esm', 'jsdom-global/register']
};
