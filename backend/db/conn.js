const mongoose = require("mongoose");
const MongoURL = "mongodb://localhost:27017/tutorial";
const DBConn = async () => {
  try {
    const conn = await mongoose.connect(MongoURL, {
      useNewUrlParser: true,
    });
    console.log("Connection Created");
    return conn;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  DBConn,
};
