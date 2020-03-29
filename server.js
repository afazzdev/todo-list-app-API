const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://tester:hFNo23GEIfTxTQP4@cluster0-almhu.mongodb.net/test?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then((res) => console.log('DB connected'))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
