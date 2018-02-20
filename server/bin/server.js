"use strict";
const app = require('../app')();
const {port} = require('../config');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
var express = require('express');
var proxy = require('http-proxy-middleware');
var url = require('url');

const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

var conf = require("../configdb/" + (process.env.NODE_ENV || "development"));

var filter = function (pathname, req) {
    return (req.method === 'GET');
};

var proxyOptions = {
    target: 'http://localhost:8081/', // target host
    //ws: true,                         // proxy websockets
    pathRewrite: {
      //'^/registration' : '/registration.html',
      /*'^/404' : '/404.html',*/
      '/*.html' : '404'
    }
};

var apiProxy = proxy(filter, proxyOptions)

app.use('/', apiProxy);

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/",
    inline: true,
    port: 8081,
    public:'0.0.0.0:8081',
    disableHostCheck: true,
    stats: { colors: true },
    historyApiFallback: true
});

server.listen(8081, "localhost", function() {
  console.log('Webpack Server live on ' + 8081)});

var cors = require('cors')

app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
require('../restRoutes/RestRoutes')(app);
require('../restRoutes/ApiManagement')(app);
// require('./restRoutes/UserManagement')(app);
// app.listen(8080, () => {
//   console.log('Express Server live on ' + 8080);
// });
MongoClient.connect(conf.dbUrl, (err, database) => {
  if (err) return console.log(err)
  require('../restRoutes/MongoRestRoutes')(app, database);
  require('../restRoutes/UserManagement')(app, database);
  app.listen(8080, () => {
    console.log('Express Server live on ' + 8080);
  });
})



// app.listen(port, () => {
  // console.log('Express App listening on port:', port);
// });


