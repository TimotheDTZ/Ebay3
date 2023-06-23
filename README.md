# Storybook Project

Ce projet est un Storybook, une plateforme permettant de visualiser, développer et tester des composants d'interface utilisateur de manière isolée. Il fournit un environnement de développement convivial pour les développeurs front-end, leur permettant de créer et de partager des histoires interactives pour leurs composants.

## Fonctionnalités

- Visualiser les composants d'interface utilisateur individuels dans un environnement isolé.
- Développer et tester les composants indépendamment du reste de l'application.
- Créer des histoires interactives pour documenter et démontrer l'utilisation des composants.
- Permettre aux développeurs de collaborer et de partager leurs composants avec d'autres membres de l'équipe.
- Fournir des outils pour l'inspection, le débogage et le test des composants.

## Comment commencer

Suivez ces instructions pour obtenir une copie du projet et l'exécuter localement à des fins de développement et de test.

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org) (version 12 ou supérieure)
- [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/))

### Installation

1. Clonez le dépôt GitHub :

   ```bash
   git clone https://github.com/TimotheDTZ/Ebay3.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd storybook-project
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn
   ```

### Exécution

1. Démarrez le serveur de développement de Storybook :

   ```bash
   npm run storybook
   ```

   ou

   ```bash
   yarn storybook
   ```

2. Ouvrez votre navigateur et accédez à `http://localhost:6006` pour voir le Storybook en action.

## Structure du projet

La structure du projet est organisée de la manière suivante :

```
storybook-project/
  ├── .storybook/         # Configuration de Storybook
  ├── src/                # Code source du projet
  │   ├── Core/     # Composants réutilisables
  │   └── stories/        # Histoires des composants
  │   └── Token/        # Variables réutilisables
  └── package.json        # Informations sur le projet et dépendances
```

## Auteurs

- [Maxvoltaire](https://github.com/Maxvoltaire)
- [TimotheDTZ](https://github.com/TimotheDTZ)

