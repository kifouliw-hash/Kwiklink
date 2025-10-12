const express = require("express");
const path = require("path");
const app = express();

// ✅ Rendre le dossier "public" accessible
app.use(express.static(path.join(__dirname, "public")));

// ✅ Render choisit le port automatiquement
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur le port ${PORT}`);
});