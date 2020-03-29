const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/todo', todoRoutes);

app.use(globalErrorHandler);

module.exports = app;
