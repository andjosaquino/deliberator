var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var meRouter = require('./routes/me');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var googleRouter = require('./routes/google-login');
var unlinkRouter = require('./routes/unlink');

var auth = express();

auth.use(cors());
auth.use(logger('dev'));
auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({ extended: true }));

// Force HTTPS on Heroku
if (auth.get('env') === 'production') {
  auth.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}
auth.use(express.static(path.join(__dirname, '../client')));

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 */
auth.use('/api/me', meRouter);

/*
 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 */

/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
auth.use('/auth/login', loginRouter);

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
auth.use('/auth/signup', signupRouter);

/*
 |--------------------------------------------------------------------------
 | Login with Google
 |--------------------------------------------------------------------------
 */
auth.use('/auth/google', googleRouter);

/*
 |--------------------------------------------------------------------------
 | Unlink Provider
 |--------------------------------------------------------------------------
 */
auth.use('/auth/unlink', unlinkRouter);


module.exports = auth;
