var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Gar')
  .then(() => console.log('Connected!'));

var cors = require('cors')
require('dotenv').config();

// router
var indexRouter = require('./routes/index');
var vehicleRouter = require('./routes/vehicle');
var serviceRouter = require('./routes/service');
var technicianRouter = require('./routes/technician');
var appointmentRouter = require('./routes/appointment');
var invoiceRouter = require('./routes/invoice');
var contactRouter = require('./routes/Contact');



var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// router
app.use('/', indexRouter);
app.use('/vehicle', vehicleRouter);
app.use('/service', serviceRouter);
app.use('/technician', technicianRouter);
app.use('/appointment', appointmentRouter);
app.use('/invoice', invoiceRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
