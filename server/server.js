'use strict';

require('dotenv').config();
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const express    = require('express');
const server     = express();
const apiRouter  = require('./api/apiRouter.js');
const PORT       = process.env.PORT || 8080;

const appUrlArr = ['http://localhost:8080', 'https://belzy-alertifi.herokuapp.com'];

server.use(cors());
server.use(express.json());
server.use(apiRouter);

const routes = ['/', '/Home', '/AlertFeed', '/CreateAlert', '/Settings', '/SignOut', '/SignIn', '/SignUp', ];

server.use(routes, express.static(path.join(__dirname, '../client/build')));

server.get('/', (req, res, next) => {
  res.redirect('/Home');
});

server.get(routes, (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`);
});
