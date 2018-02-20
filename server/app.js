const express = require('express');

function generateApp(inputApp) {
  const app = inputApp || express();

  app.use(require('./api'));
  app.use(require('./restRoutes'));
  
  return app;
}

module.exports = generateApp;
