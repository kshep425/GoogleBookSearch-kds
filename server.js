const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./frontend/public"));

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});