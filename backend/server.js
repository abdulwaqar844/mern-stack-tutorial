const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { authenticateToken } = require("./middleware/auth");
const { DBConn } = require("./db/conn");
const app = express();
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
DBConn();
app.use("/goal", require("./routes/goalRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
