#!/bin/bash
echo "🚀 Force Sync Render - Déploiement complet KwikLink"

# Ajoute absolument tout (même les images, fichiers cachés, etc.)
git add -A

# Commit avec horodatage
git commit -m "⚡ Force redeploy Render - $(date '+%Y-%m-%d %H:%M:%S')"

# Push sur la branche principale
git push origin main

# Confirme la mise à jour
echo "✅ Tous les fichiers ont été envoyés à GitHub."
echo "⏳ Attends environ 1 à 2 minutes que Render déploie automatiquement..."
echo "🌍 Vérifie ton site : https://kwiklink.onrender.com"