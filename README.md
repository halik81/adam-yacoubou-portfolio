# Portfolio — Adam Yacoubou

Portfolio personnel one-page en français, réalisé en HTML, CSS et JavaScript vanilla. Aucun framework ni étape de compilation n’est nécessaire. La direction visuelle s’appuie sur une illustration locale originale de code et deux panneaux d’extraits CSS génériques. Le portrait de la page d’accueil utilise la photo publique du profil GitHub `halik81`. Le CV téléchargeable est reconstitué uniquement à partir des informations fournies.

## Prévisualiser en local

Ouvrir `index.html` dans un navigateur moderne. Pour servir le dossier en HTTP, depuis sa racine :

```sh
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Déployer sur GitHub Pages

Le dépôt publie automatiquement la branche `main` avec GitHub Actions. Le portfolio est disponible à l’adresse <https://halik81.github.io/adam-yacoubou-portfolio/>.

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
