var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var jwt = require('jsonwebtoken');
var connection = require('./database/connection_manager');
var CronJob = require('cron').CronJob;

var index = require('./routes/index');
var users = require('./routes/users');
var authenticate = require('./model/authentication_dal');
var course = require('./model/course_dal');
var requirements = require('./model/requirements_dal');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/authenticate', authenticate);
app.use('/courses', restrict, course);
app.use('/requirements', restrict, requirements);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// refresh our database connection every time period so that we don't have a hang up
var refresh = new CronJob({
    cronTime: "0 */1 * * * *",
    onTick: function(){
        connection.refresh(function(error, result){
            if (error){
                console.log(error);
            } else {
            }
        });
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});
function restrict(req, res, next){
    var fs = require('fs');
    var skGradPlanSSU = fs.readFileSync(__dirname + '../keychain/skGradPlanSSU.pem');
    var token = req.body.token || req.query['token'] || req.headers['x-access-token'];
    if (token) {
	jwt.verify(token, skGradPlanSSU, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
		req.decoded = decoded;
                next();
            }
        });

    } else {
	return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}
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
