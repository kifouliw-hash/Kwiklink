const express = require("express");
const path = require("path");
const app = express();

// ✅ 1. Définir le chemin absolu du dossier public
const publicPath = path.join(__dirname, "public");

// ✅ 2. Rendre le dossier public accessible
app.use(express.static(publicPath));

// ✅ 3. Servir la page principale sur "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index2.html"));
});

// ✅ 4. Capturer toute autre route et rediriger vers la page principale
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index2.html"));
});

// ✅ 5. Port Render ou local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur le port ${PORT}`);
});