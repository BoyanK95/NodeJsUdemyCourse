const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(id, title, price, description, imageUrl) {
    this._id = id ? new mongodb.ObjectId(id) : null
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log("Product inserted!");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        // console.log(products);
        return products;
      })
      .catch((err) => console.log(err));
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((product) => {
        // console.log(product);
        return product;
      })
      .catch((err) => console.log(err));
  }

  static deleteByID(prodId) {
    const db = getDb();
    if (!prodId) {
      window.alert('There is no product mathcing this Id!')
    }
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
  }
}

module.exports = Product;
