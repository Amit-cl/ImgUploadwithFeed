const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/project-1");
  console.log("DB connected");
}

module.exports = connectDB;