const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server!");
});

// GET route with a parameter
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID: ${userId}` });
});

// POST route
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    receivedData: data,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
