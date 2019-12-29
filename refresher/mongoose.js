const mongoose = require("mongoose");
const Product = require("./models/product");

const url = "mongodb://localhost/products_test";
mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log("Error in mongo connection.", err));

// create
const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });
  const result = await newProduct.save();

  res.status(201).json(result);
};

// get all
const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.status(200).json(products);
};

module.exports = { createProduct, getProducts };
