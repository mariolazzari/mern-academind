const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/products_test";

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = { name, price };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "Cannot store data." });
  }
  client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = db
      .collection("products")
      .find()
      .toArray();
  } catch (error) {
    return res.status(500).json({ message: "Cannot retrive data." });
  }
  client.close();
  res.json({ products });
};

module.exports = { createProduct, getProducts };
