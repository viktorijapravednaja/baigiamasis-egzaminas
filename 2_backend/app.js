const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
PORT = process.env.PORT || 5000;

const connectMongoDB = require("./config/db.js");
const Customer = require("./models/Customer.model.js");

// -- connecting DB
connectMongoDB();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("SUP");
});

app.post("/registration", async (req, res) => {
  const customer = new CustomerSchema({
    name: "Jogn",
    email: "j@g.com",
    date: "20*=-2-2",
    time: "14:25",
  });
  try {
    await customer.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
