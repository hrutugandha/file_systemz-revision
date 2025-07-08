const express = require('express');
const mongoose = require('mongoose');

const userController = require('./controllers/users.controllers');

const app = express();

app.use("./users", userController);

module.exports = app;