const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb://localhost:27017/practice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}