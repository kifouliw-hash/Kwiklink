const express = require("express");
const app = express();

// ✅ Permet d'accéder aux fichiers du dossier "public"
app.use(express.static(__dirname + "/public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ KwikLink en ligne sur http://localhost:${PORT}`);
});