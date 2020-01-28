import { Posts } from '../api/collections';
import { check } from 'meteor/check';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function () {
    return Posts.find();
  });
  Meteor.publish('post', function (slug) {
    check(slug, String);
    return Posts.find({ slug: slug });
  });
}