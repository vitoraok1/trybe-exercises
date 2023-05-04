const express = require('express');
const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/book', Book.getAll);

app.get('/book/:id', Book.getById);

module.exports = app;