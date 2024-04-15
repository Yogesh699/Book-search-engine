const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB ||
    "mongodb+srv://admin:admin@cluster0.mimezxj.mongodb.net/books"
);

module.exports = mongoose.connection;
