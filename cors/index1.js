const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    domains: ["http://127.0.0.1:5500/"],
  }),
);
app.use(express.json());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
