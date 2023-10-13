const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((user) => {
        console.log("User Created !");
        console.log(user);
      })
      .catch((err) => console.log(err));
  }

  static findById(usedId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(usedId) })
      .then((user) => {
        console.log("User Found!");
        console.log(user);
        return user;
      })
      .catch((err) => console.log(err));
  }

  getCart() {
    const db = getDb();
  }

  addToCart(product) {
    // const cartProducts = this.cart.items.findIndex(
    //   (cartProduct) => cartProduct._id === product._id
    // );
    const updatedCart = {
      items: [{ productId: new mongodb.ObjectId(product._id), quantity: 1 }],
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }
}

module.exports = User;
