const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect('mongodb://localhost:27017/todo-list-app', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log('DB connected'))
  .catch((err) => console.log("DB can't connect"));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
