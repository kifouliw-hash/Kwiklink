const express = require("express");
const path = require("path");
const app = express();

// ✅ Rendre le dossier "public" accessible partout
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// ✅ Servir la page principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur le port ${PORT}`);
});