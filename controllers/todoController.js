const Todo = require('../models/todoModel');
const AppError = require('../utils/appError');

exports.getAllTodo = async (req, res, next) => {
  const todos = await Todo.find();

  res.status(200).json({
    status: 'success',
    data: todos,
  });
};

exports.addNewTodo = async (req, res, next) => {
  const data = await Todo.create(req.body);

  res.status(201).json({
    status: 'success',
    data,
  });
};

exports.deleteTodo = async (req, res, next) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
  });
};
