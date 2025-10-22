const express = require("express");
const path = require("path");
const app = express();

// ✅ Rendre le dossier "publique" accessible (corrigé)
app.use(express.static(path.join(__dirname, "publique")));

// ✅ Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "publique", "index.html"));
});

// ✅ Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 KwikLink en ligne sur http://localhost:${PORT}`);
});
