const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.get("", (req, res) => {
  res.send('Hello World!cd');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
