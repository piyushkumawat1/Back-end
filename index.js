const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const JWT_SECRET = "Piyush";
const { TodoModel, UserModel } = require("./db");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://piyushkumawat3440_db_user:DBUSER@cluster0.j7c0ote.mongodb.net/Backend_server",
);

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.json({
    message: "You are succesfully signed Up",
  });
});
app.post("/signin", async function (req, res) {
  const password = req.body.password;
  const email = req.body.email;
  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET,
    );

    res.json({
      token: token,
      message: "you signed in",
    });
  } else {
    res.status(403).json({
      message: "Incorrenct credientials",
    });
  }
});
app.post("/todo", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  TodoModel.create({
    title,
    userId,
  });
  res.json({
    userId: userId,
  });
});
app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });
  res.json({
    userId: userId,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect crediantials",
    });
  }
}

app.listen(30000);
