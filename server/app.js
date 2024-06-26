var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

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

    const db = client.db('Portfolio');
    app.locals.db = db;
  })
  .catch((err) => {
    console.log(err, 'could not connect to database');
  });

app.post('/exchange_token', async (req, res) => {
  const { code } = req.body;
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uri = process.env.CLIENT_URL;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    }),
  });

  const data = await response.json();
  res.json(data); // Send the tokens back to the front-end
});

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/sendmail', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error, 'error');
      res.status(500).send('Error sending mail');
    } else {
      res.status(200).send('Email sent succesfully');
    }
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);

module.exports = app;
