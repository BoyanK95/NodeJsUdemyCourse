const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
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
}

module.exports = User;
