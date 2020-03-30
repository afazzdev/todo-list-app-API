const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://tester:hFNo23GEIfTxTQP4@cluster0-almhu.mongodb.net/todo-list?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then((res) => console.log('DB connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on port 8000');
});
