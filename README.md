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
* le serveur est configuré et permet un redémarrage "à chaud" à chaque modification (hot reload)
* On peut faire du js ESNext grâce à Babel

D'ailleurs on peut jeter un coup d'oeil aux librairies installées : 

* Dans le fichier package.json, on retrouvera les paquets npm installés.
  * react-dom : Cette librairie permet d'accéder au DOM
  * react : 
* Dans le fichier .meteor/packages, vous trouverez tous les paquets meteor.

Notion Théorique : 
* Introduction à React
* DOM Virtuel à creuser

# Étape n°2 : Création des composants footer, header et homepage

A REFAIRE : le composant Homepage au lieu de Posts

Pour commencer, tout le code de l'application exemple a été supprimée.

## Découper la page en différent templates :

Ensuite nous allons mettre en place quelques composants de base de notre application.

SCHEMA DE L'APPLICATION : Montrant la page découpé en HEADER, CORPS DE PAGE, FOOTER

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

** Ajout d'un flavicon

**EXPLICATION des dossiers spéciaux**

Création d'un dossier spécial `public` et coller le flavicon *.ico dedans. 


# Étape n°3: Le routing

## Installation du paquet

Il existe plusieurs moyens de faire le routing en meteor et aussi en react.
On va utiliser ```React-router```.

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

## Création des collections

Voir fichier imports/api/collections.jsx

Attention à ne pas oublier l'import des collections côtés serveur

Dans le fichier `server/main.js` ajout de la ligne

`import '../imports/api/collections';`

## Faire des requêtes directement dans la console du navigateur

Voir fichier client/main.jsx

```
// Les quelques lignes ci-dessous permettent de faire 
// des requêtes MongoDB directement dans la console du navigateur
if (Meteor.isDevelopment) {
  window.Posts = Posts;
  window.Comments = Comments;
}
```

## Guide de survie avec MongoDB

### Exemple de requêtes de base de MongoDB dans navigateur

Exemple 1: Sélectionner tous les articles:

`Posts.find({}).fetch()`

Exemple 2: Sélectionner un article:

`Posts.findOne("o4rD7LtQkkD2MLmmN")`

Exemple 2: Insérer un nouvel article:

Exemple 3: Mettre à jour un article:

Exemple 4: Supprimer un article:

`Posts.remove("o4rD7LtQkkD2MLmmN")`

### Outil MongoDB Compass

Chaque application meteor à une base de données MongoDb configurée automatiquement.
Cette DB a pour nom `meteor` et son port par défaut est le `3001`

Outil très pratique pour interroger la base de donnée MongoDB

### Mongo Shell

Lorsque votre application est lancée en local, vous pouvez utiliser le shell mongo.

`meteor mongo`

show databases
show collections
db.posts.find()

Pour supprimer tous les documents d'une collection :
`db.posts.deleteMany({})`


## Implémentation du form pour ajouter un post

* Mise en place d'un form simple (sans validation)
* Attention au `htmlFor` et pas `for` ou `className` et pas `class` pour la partie jsx bootstrap
* Utilisation de `ref` pour accéder à un élément du DOM pour le modifier ou déclencher des actions

## Implémentation de la liste des posts

* Explication de la notion `props`
* Communication entre le composant parent et le composant enfant

Pour afficher la date au bon format, on utilise la librairie node `moment`

`meteor npm i moment`

## React avec Meteor

`withTracker()` est un HOC (High Order Component)

Il permet de :
* transmettre des variables à un composant via `props`
* rendre les variables `reactives`

**A Compléter avec la doc https://guide.meteor.com/react.html **

# Étape n°5: Les meteors methods

# Étape n°6: Publications et subscriptions

# Étape n°7: Gestion des formulaires avec Formik

Gestion de l'Edition

Dans le composant PostElement on ajoute un bouton pour editer

<Link className="navbar-brand" to={`/edit-post/${ this.props.post._id }`}>
  <button 
    type="button" 
    className="btn btn-outline-primary" 
  >Modifier</button>
</Link>

# Étape n°xxx: Gestion des users, des rôles

## Tequila

## Groups

## Gérer une migration pour ajouter le ownerId à un post


