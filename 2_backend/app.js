const express = require("express");
const cors = require("cors");
const asyncHandler = require("express-async-handler");

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

app.post(
  "/register",
  asyncHandler(async (req, res) => {
    try {
      const { name, email, date, time } = req.body;

      //checking if user with given email exists
      const customerExists = await Customer.findOne({ email });

      //throwing error if exists
      if (customerExists) {
        res.status(400).send("Customer already exists");
        throw new Error("Customer already exists");
      }
      //saving user to db
      const customer = await Customer.create({ name, email, date, time });

      return res.send("Customer registered!");
    } catch (err) {
      return res.status(500).send("An error occured.");
    }
  })
);

app.get(
  "/customers",
  asyncHandler(async (req, res) => {
    const customer = await Customer.find();
    console.log(customer);
    if (customer) {
      res.json({
        customer,
      });
    } else {
      res.status(404).send("User not found");
      throw new Error("User not found");
    }
  })
);

app.delete(
  "/delete",
  asyncHandler(async (req, res) => {
    try {
      const { id } = req.body;
      console.log(id);
      const deleteCustomer = await Customer.findOneAndDelete({ id });
      console.log(deleteCustomer);
    } catch (err) {
      return res.status(500).send("An error occured.");
    }
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
