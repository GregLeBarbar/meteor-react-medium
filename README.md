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

## Introduction à React : 

React est une librairie JavaScript open-source permettant de créer des interfaces utilisateurs pour des applications single-page.

React a été créé par Jordan Walke, un ingénieur de Facebook en 2011.

### Performance

React utilise un DOM virtuel pour obtenir des performances très supérieures à du JavaScript natif. En effet, au lieu de modifier directement le DOM (arbre des éléments HTML), ce qui est coûteux em performance, React va calculer à l'aide du DOM virtuel tous les changements optimaux à effectuer sur le DOM avant de les effectuer.

### Utilisation du JSX 

Avec React, au lieu d'utiliser du HTML, on utilise du JSX.
(Ce n'est pas obligatoire mais fortement recommandé)
Le JSX permet d'écrire du code HTML dans du code JavaScript.
Ce code sera ensuite transpilé en JavaScript.

### Philosophie de React

React a pour philosophie de ne pas séparer la structure HTML, le style CSS et la logique, mais de séparer l'application en **composants** qui sont complets et construits autour d'une fonctionnalité.

Cette approche permet de créer des applications qui soient plus facilement maintenables car elles sont mieux structurées.

Elle permet également une réutilisation des composants dans plusieurs endroits de votre application.


# Étape n°2 : Création des composants footer, header et homepage

A REFAIRE : le composant Homepage au lieu de Posts

Pour commencer, tout le code de l'application exemple a été supprimée.

## Découper la page en différent templates :

Ensuite nous allons mettre en place quelques composants de base de notre application.

SCHEMA DE L'APPLICATION : Montrant la page découpée en HEADER, CORPS DE PAGE, FOOTER

Ceci nous permet de voir le concept de composant en React. 

## Composant

Un composant est une brique réutilisable et isolée.

Il y a 2 types de composants : 
- composant fonctionnel (fonction JavaScript)
- composant à état (classe JavaScript)

Il peut optionnellement recevoir en paramètre des propriétés (concept de `props`) et retourne un élément React.

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
Puis lancer la commande :

```Meteor add nathantreid:static-assets```

Vous pouvez trouver ce paquet sur le registry de tous les paquets meteor à savoir [atmospherejs](https://atmospherejs.com/)

A cette étape, nous avons également besoin d'installer un package pour bootstrap4 :
```alexwine:bootstrap-4```

## Introduction jsx :

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

L'utilisation des `props` permet de rendre les composants dynamiques en pouvant leur passer des données, généralement d'un composant parent vers un composant enfant.

Un props est un objet passé à un composant lors de son utilisation.

Les props sont immutables, il ne faut pas que les composants recevant la props la modifie.

* Communication entre le composant parent et le composant enfant

Le flux de données est unidirectionnel c'est à dire qu'il va toujours dans le sens composant parent vers le composant enfant.

Un composant parent est un composant qui contient un ou plusieurs composants appelé(s) enfant(s).

* Communication entre le composant enfant et le composant parent

Il suffit de passer une méthode du composant à état parent au composant enfant.
Ce dernier peut ensuite utiliser cette méthode car sa référence se trouve sur this.props.methodeParente.

Voir la suppression d'un post

## Rappel sur this

En utilisant une fonction standard JavaScript, le valeur du `this` dépend de son contexte d'exécution.
Dans un navigateur, `this` correspond a l'objet `window` (qui est l'objet global dans ce contexte d'exécution).
Ceci peut donc poser problème lorsque l'on utilise le this dans un composant à état.

Pour résoude le problème :
- une fonction fléchée
- utiliser bind pour fixer la valeur du this 


## Afficher la date à l'aide de la librairie `moment`

Pour afficher la date au bon format, on utilise la librairie node `moment`

`meteor npm i moment`

## React avec Meteor

`withTracker()` est un HOC (High Order Component)

Il permet de :
* transmettre des variables à un composant via `props`
* rendre les variables `reactives`

**A Compléter avec la doc https://guide.meteor.com/react.html **

## Utilisation de style 

L'attribut `style` permet d'utiliser un objet JavaScript contenant des propriétés en `camelCase`

Voir exemple dans PostDetails.jsx

style={ { "whiteSpace": "pre-line"} }



# Étape n°5: Les meteors methods

## Suppression de paquet meteor insecure

## Déplacer le code d'ajout et de suppression d'un post dans les meteor methods

## Appeler les meteor methods

## Fonction de callback en 3ème paramètre

Voir l'appel de la meteor methods dans le fichier /imports/ui/post/PostAdd.jsx

## Valider les données avec simple-schema

Installation du paquet 

`meteor npm install simpl-schema`

## Remonter les erreurs de validation au client

## Afficher les erreurs dans le formulaire

## Afficher les erreurs en Français

Pour cela on ajoute le fichier ValidationMessage.js et on l'utilise dans collections.js

# Étape n°6: Publications et subscriptions

## Suppression du paquet Meteor autopublish

## Publications

Création du fichier `publications.js`

A noter `if (Meteor.isServer) {`

```
import { Posts } from '../api/collections';
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function () {
    return Posts.find();
  });
}
```

Comment faire en sorte de ne charger que les données d'un article 
lors de l'affichage en détail d'un article ?

```
export default withTracker((props) => {
  Meteor.subscribe('post', props.match.params.slug);
  let posts = Posts.find({slug: props.match.params.slug}).fetch();
  let loading = posts.length == 0;
  return {
    loading: loading,
    post: posts[0],
  }
})(PostDetails);
```

## RESTE A FAIRE 

Pour rendre cette étape plus intéressante :
- mettre plus de check dans publications.js ?
- rendre les articles privés ?
- etc 

# Étape n°7: Gestion des formulaires avec Formik

## Explication du state

Le state d'un composant à état est un objet JavaScript qui va contenir les données dynamiques du composant et déterminer son comportement.

Le state peut être modifié (contrairement à props) mais uniquement par le composant sur lequel il est défini. State est donc privé.

Pour modifier le state, nous devons utiliser la méthode setState.
Cette méthode permet de dire à React d'effectuer une mise à jour de l'affichage en utilisant les nouvelles valeurs du state.

Gestion de l'Edition

Dans le composant PostElement on ajoute un bouton pour editer

## Formik

Formik fait essentiellement 3 choses. Il permet de gérer :
- l'état des données dans les différents champs du formulaire
- la validation et les erreurs très facilement
- soumission du formulaire

### setErrors

Les erreurs de validation retournées par la meteor method doivent être passées au formulaire.
c'est actions.setErrors() qui fait le job.

### setSubmitting

On doit pouvoir soumettre le formulaire une nouvelle fois dès que la soumission précédente à été gérée. 

### resetForm

Lors de l'ajout d'un nouveau post, on veut reinitialiser les champs (de manière arbitraire) pour permettre à l'utilisateur de saisir un nouveau post.

# Étape n°8: Formik et Field

## Comment créer des composants pour nos champs de formulaire ?

# Étape n°xxx: Gestion des users, des rôles

## Tequila

## Groups

## Gérer une migration pour ajouter le ownerId à un post


# Liste des paquets npm ou meteor utilisé 

## react-dom
Cette librairie permet d'accéder au DOM.



