const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const todo = new Schema({
  title: String,
  done: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
