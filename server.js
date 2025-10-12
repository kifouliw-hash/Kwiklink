const fs = require("fs");
fs.readdir(path.join(__dirname, "public"), (e, files) =>
  console.log("📂 public contient :", e || files)
);const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // suffit

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index2.html"))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ KwikLink en ligne sur ${PORT}`));