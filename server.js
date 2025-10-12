const express = require("express");
const path = require("path");
const app = express();

// ✅ Rendre le dossier "public" accessible
app.use(express.static(path.join(__dirname, "public")));

// ✅ Route principale
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 KwikLink en ligne sur http://localhost:${PORT}`);
});