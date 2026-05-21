## Git Workflow

Branches utilisées :

- main → version stable
- develop → intégration
- feature/home-page
- feature/recipes
- feature/about-contact

Règles GitHub :

- Pull Request obligatoire
- 1 approbation minimum
- protection des branches



Structure de projet en Général
site-recettes/
│── index.html
│── recipes.html
│── about.html
│── contact.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── home.css
│   │   ├── recipes.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── recipes.js
│   │   └── search.js
│   │
│   └── images/
│       ├── recipe1.jpg
│       ├── recipe2.jpg
│       └── hero.jpg
│
├── docs/
│   └── contribution.md
│
├── .gitignore
├── README.md
└── netlify.toml