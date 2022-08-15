var path = require('path');
var files = './dist/atlan-assignment/';

module.exports = {
  port: 7777,
  notify: false,
  snippetOptions: {
    ignorePaths: '/',
  },
  ui: false,
  open: false,
  browser: ['google chrome', 'chrome'],
  files: [path.resolve(files, '**/*.{html,htm,css,br}')],
  server: {
    baseDir: files,
    middleware : { 1 : require('compression')() }
  },
};
