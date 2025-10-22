const express = require("express");
const path = require("path");
const app = express();

// ✅ Rendre le dossier "public" accessible
app.use(express.static(path.join(__dirname, "public")));

// ✅ Route principale (index)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 KwikLink est en ligne sur le port ${PORT}`);
});
