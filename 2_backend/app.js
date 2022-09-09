const express = require("express");
const cors = require("cors");
const asyncHandler = require("express-async-handler");

require("dotenv").config();

const app = express();
PORT = process.env.PORT || 5000;

const connectMongoDB = require("./config/db.js");
const Customer = require("./models/Customer.model.js");

//Connecting DB
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
      const customerExists = await Customer.findOne({ email });
      if (customerExists) {
        res.status(400).send("Customer already exists");
        throw new Error("Customer already exists");
      }

      const customer = await Customer.create({ name, email, date, time });

      return res.send("Customer registered!");
    } catch (err) {
      return res.status(400).send("An error occured.");
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
  "/customer/:id",
  asyncHandler(async (req, res, next) => {
    Customer.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "Customer not found",
        });
      });
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
