const express = require('express');
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(cors())

app.use(express.json());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.use('/api/v1/todo', todoRoutes);

app.use(globalErrorHandler);

module.exports = app;
