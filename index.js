const express = require("express");
const app = express();

// Sample user data
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

// Endpoint to get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Endpoint to get a user by ID
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
