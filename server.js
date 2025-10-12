const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html")); // <-- nouvelle version
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur le port ${PORT}`);
});
