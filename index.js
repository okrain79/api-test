const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route gốc
app.get("/", (req, res) => {
  res.send("Hello, Railway! 🚀");
});

// Route mới
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API test thành công!",
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
