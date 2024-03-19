var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect(process.env.DB_URL)
  .then((client) => {
    console.log('We are connected to database');

    const db = client.db('portfolio');
    app.locals.db = db;
  })
  .catch((err) => {
    console.log(err, 'could not connect to database');
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);

module.exports = app;
