const express = require('express');
const catchAsync = require('../utils/catchAsync');
const {
  getAllTodo,
  addNewTodo,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router
  .route('/')
  .get(catchAsync(getAllTodo))
  .post(catchAsync(addNewTodo));

router.route('/:id').delete(catchAsync(deleteTodo));

module.exports = router;
