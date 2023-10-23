const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const url = process.env.MONGO_URI;

const connectDb = async () => {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to database"));
};
module.exports = connectDb;