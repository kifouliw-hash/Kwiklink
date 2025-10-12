const express = require("express");
const path = require("path");
const app = express();

// ✅ 1. Rendre le dossier "public" accessible
app.use("/public", express.static(path.join(__dirname, "public")));

// ✅ 2. Servir les images depuis la racine
app.get("/:imageName", (req, res, next) => {
  const filePath = path.join(__dirname, "public", req.params.imageName);
  res.sendFile(filePath, (err) => {
    if (err) next();
  });
});

// ✅ 3. Servir la page principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

// ✅ 4. Port Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur le port ${PORT}`);
});