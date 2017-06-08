/**
 * Creating express application
 * @type {*}
 */
const express = require('express');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const config = require('./config');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setting up favicon and logger
app.use(favicon(path.join(config.directories.images, config.files.favicon)));
app.use(logger('dev'));

// setting up body-parser
const bodyParserTypes = Object.keys(config.bodyParser);
bodyParserTypes.forEach((type) => {
    app.use(bodyParser[type](config.bodyParser[type]));
});

// setting up cookies and session
app.use(session(config.session));
app.use(cookieParser());

// setting up base directory
app.use(config.server.contextPath, express.static(config.directories.publicDir));

// setting up routes,
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
