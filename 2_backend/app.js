const express = require("express");
require("dotenv").config();

const app = express();
PORT = process.env.PORT || 5000;

const connectMongoDB = require("./config/db.js");

// -- connecting DB
connectMongoDB();

//Middlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

//Routes
