const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
    validate: {
      validator: (val) => val >= Date.now(),
      message: 'start date tidak bisa diisi dengan hari yg sudah lalu',
    },
    unique: true,
  },
  endTime: {
    type: Date,
    required: true,
    validate: {
      validator: function(val) {
        return val >= this.startTime;
      },
      message: 'start date tidak bisa diisi dengan hari yg sudah lalu',
    },
    unique: true,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
