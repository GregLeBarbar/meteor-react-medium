import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';

import { Posts, Comments } from '../imports/api/collections';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});

// Les quelques lignes ci-dessous permettent de faire 
// des requêtes MongoDB directement dans la console du navigateur
if (Meteor.isDevelopment) {
  window.Posts = Posts;
  window.Comments = Comments;
}
