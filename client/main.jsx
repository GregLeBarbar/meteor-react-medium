import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { Posts } from '../imports/api/collections';
import Tequila from 'meteor/epfl:accounts-tequila';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
  Tequila.start();
});

// Les quelques lignes ci-dessous permettent de faire 
// des requêtes MongoDB directement dans la console du navigateur
if (Meteor.isDevelopment) {
  window.Posts = Posts;
  window.Users = Meteor.users;
}
