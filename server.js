// server.js
const express = require("express");
const app = express();

// On rend le dossier "public" visible depuis le navigateur
app.use(express.static("public"));

// Démarrer le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink est en ligne sur http://localhost:${PORT}`);
});