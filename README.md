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

<EXPLICATION sur les composants à terminer>

Il faut privilégier l'utilisation des composants fonctionnels.

Pour avoir le logo de l'epfl présent dans le header, nous devons installer le paquet meteor suivant :

```nathantreid:static-assets```

Ce paquet nous permettra d'importer le fichier svg.

Pour importer le paquet, vous pouvez modifier le fichier .meteor/packages et copier coller 
```nathantreid:static-assets```
à la fin du fichier

Vous pouvez trouver ce paquet sur le registry de tous les paquets meteor à savoir [atmospherejs](https://atmospherejs.com/)

A cette étape, nous avons également besoin d'installer un package pour bootstrap4 :
```alexwine:bootstrap-4```

## Introduction jsx :

<EXPLICATION sur jsx>

Noter que les attributs HTML sont différents en jsx.

Par exemple: `class` devient `className`

