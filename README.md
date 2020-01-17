# Étape n°1 : Créer le projet


Pour cela lancer la commande

```
meteor create --react medium
```

Grâce à l'option `--react` le framework front-end react remplacera le framework historique de meteor à savoir BlazeJS.

Cette commande génère également une petite application exemple Meteor/React.

Nous pouvons lancer l'application:

Pour cela :

```
cd medium
meteor
```

À noter que la configuration du projet est complète :
* la base de données MongoDB est déjà configurée
* le serveur est configuré et permet un redémarrage "à chaud" à chaque modification
* On peut faire du js ESNext grâce à Babel

D'ailleurs on peut jeter un coup d'oeil aux librairies installées : 

* Dans le fichier package.json, on retrouvera les paquets npm installés.
* Dans le fichier .meteor/packages, vous trouverez tous les paquets meteor.

# Étape n°2 : Création du footer, du header et du corps de la page

Pour commencer, tout le code de l'application exemple a été supprimée.

## Découper la page en différent templates :

Ensuite nous allons mettre en place quelques composants de base de notre application.

SCHEMA DE L'APPLICATION : 

Ceci nous permet de voir le concept de composant en React. 
Il y a 2 types de composants : 
- composant fonctionnel 
- composant à état

**EXPLICATION sur les composants à COMPLÉTER**

Il faut privilégier l'utilisation des composants fonctionnels.

## Installation d'un paquet Meteor

Pour avoir le logo de l'epfl présent dans le header, nous devons installer le paquet meteor suivant :

```nathantreid:static-assets```

Ce paquet nous permettra d'importer le fichier svg.

### Importer un paquet: Methode 1

Pour importer le paquet, vous pouvez modifier le fichier .meteor/packages et copier coller 
```nathantreid:static-assets```
à la fin du fichier

### Importer un paquet: Methode 2

Vous pouvez également arrêter le serveur meteor. 
Puis lance la commande :

```Meteor add nathantreid:static-assets```

Vous pouvez trouver ce paquet sur le registry de tous les paquets meteor à savoir [atmospherejs](https://atmospherejs.com/)

A cette étape, nous avons également besoin d'installer un package pour bootstrap4 :
```alexwine:bootstrap-4```

## Introduction jsx :

**EXPLICATION sur jsx à COMPLÉTER**

Noter que les attributs HTML sont différents en jsx.

Par exemple: `class` devient `className`

# Étape n°3: Le routing

## Installation du paquet

Il existe plusieurs moyens de faire le routing en meteor et aussi en react.
Le choix ici est d'utiliser la librairie la plus utilisée ```React-router```.

Il s'agit d'un paquet npm.

Donc pour l'installer :

```meteor npm install react-router-dom```

## Définition des routes dans App.jsx

A noter :
* le `exact` dans `<Route exact path="/"`
* que le composant `AddPost` gère l'ajout et l'édition d'un post.
* dans le composant `AddPost`: `this.props.match.path` permettant d'obtenir l'url courante
* dans le footer et le header: expliquer les différences entre :
- <a href="">pour les liens externes à l'application</a>
- `Link`: permet de définir un lien utilisant le `Router`
- `NavLink`: est une version spéciale de `Link` permet de donner des classes lorsque le lien est actif 
  => voir `activeClassName` et `exact` dans le `Header`

## Introduction à l'état d'un composant

* dans le composant `AddPost`: Faire une introduction au state



# Étape n°4: Articles & Commentaires

## React avec Meteor

## Guide de survie avec MongoDB

# Étape n°5: Les meteors methods

# Étape n°6: Publications et subscriptions

# Étape n°7: Gestion des formulaires avec Formik

# Étape n°xxx: Gestion des users, des rôles

## Tequila

## Groups


