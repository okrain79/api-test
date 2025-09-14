const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;  // đổi fallback sang 8080 cho khớp

app.get("/", (req, res) => {
  res.send("Hello, Railway! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
