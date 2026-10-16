# Portfolio — Adam Yacoubou

Portfolio personnel one-page en français, réalisé en HTML, CSS et JavaScript vanilla. Aucun framework ni étape de compilation n’est nécessaire. La direction visuelle s’appuie sur une illustration locale originale de code, deux panneaux d’extraits CSS génériques et des changements de couleur au survol/focus. La page présente uniquement les informations certaines du brief ; l’avatar signale explicitement que la photo originale n’était pas disponible et le CV téléchargeable est reconstitué à partir de ces mêmes informations.

## Prévisualiser en local

Ouvrir `index.html` dans un navigateur moderne. Pour servir le dossier en HTTP, depuis sa racine :

```sh
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Déployer sur GitHub Pages

1. Ajouter le contenu du dossier à la branche `main` d’un dépôt GitHub.
2. Dans **Settings → Pages → Build and deployment**, choisir **GitHub Actions**.
3. Le workflow `.github/workflows/pages.yml` publie le contenu du dépôt à chaque push sur `main` et lors d’un lancement manuel.
4. L’adresse publique apparaît dans **Settings → Pages** et dans le résumé du workflow de déploiement.

La page n’a pas de domaine public attribué : aucune URL canonique n’est déclarée afin de ne pas en inventer une.

## Contenu du projet

- `index.html` — page unique, sections, métadonnées, navigation et contacts.
- `css/style.css` — styles responsive, thèmes clair/sombre et respect de `prefers-reduced-motion`.
- `js/script.js` — progression de lecture, navigation active, apparitions, titre animé et thème.
- `assets/cv-adam-yacoubou.txt` — CV téléchargeable établi uniquement à partir des informations fournies.
- `assets/code-atmosphere.svg` — décor original de code, utilisé comme image locale de fond.
- `assets/favicon.svg` — favicon.
- `.github/workflows/pages.yml` — publication GitHub Pages.
- `.nojekyll` — indique à Pages de servir les fichiers sans traitement Jekyll.

## Contrôles manuels

Tester les largeurs 375 px et 1280 px+, toutes les ancres, le changement de thème, le téléchargement du CV, les liens `mailto:`, `tel:` et WhatsApp, ainsi que le mode de réduction des animations. Vérifier également les erreurs de console dans le navigateur.
