const mongoose = require("mongoose");
// ! connect to mongodb database

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://0.0.0.0:27017/task-manager")
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => console.error(err));

module.exports = mongoose;
