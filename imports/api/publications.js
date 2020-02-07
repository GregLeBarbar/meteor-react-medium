import { Posts } from '../api/collections';
import { check } from 'meteor/check';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function () {
    return Posts.find();
  });
  Meteor.publish('postBySlug', function (slug) {
    check(slug, String);
    return Posts.find({ slug: slug });
  });
  Meteor.publish('postById', function (postId) {
    check(postId, String);
    return Posts.find({ _id: postId });
  });
}