const express = require("express");
const app = express();
function isEnough(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
app.get("/ride1", function (req, res) {
  if (isEnough(req.query.age)) {
    res.json({
      msg: "You are Eligible to drive",
    });
  } else {
    res.status(411).json({
      msg: "You are not eligible for the drive",
    });
  }
});
app.listen(3000);
