import { Meteor } from 'meteor/meteor';
import { Match, check } from 'meteor/check';
import { throwMeteorErrors } from './error';
import { Posts, postUpsertSchema } from '../api/collections';
import slugify from 'slugify';
import './error';

if (Meteor.isServer) {

  Meteor.methods({

    insertPost(newData) {

      // check is user is connected
      if (!this.userId) {
        throw new Meteor.Error('not connected');
      }

      // check if user can create a new post
      const canInsert = Roles.userIsInRole(
        this.userId,
        ['admin', 'editor'],
        Roles.GLOBAL_GROUP
      );

      if (! canInsert) {
        throw new Meteor.Error(
          'unauthorized',
          'Only admins and editors can insert posts.'
        );
      }

      if (newData !== {}) {
        // check the data sent by the user
        const checkData = Match.test(
          newData,
          { title: String, content: String }
        );
        if (!checkData) {
          throwMeteorErrors(
            ['title', 'content'],
            'The data sent is bad'
          );
        }
      }

      const newPost = {
        title: newData.title,
        content: newData.content,
        slug: slugify(newData.title),
        createdAt: new Date(),
      }

      // validate new Post before insert
      postUpsertSchema.validate(newPost);

      Posts.insert(newPost);
    },

    removePost(postId) {

      // check is user is connected
      if (!this.userId) {
        throw new Meteor.Error('not connected');
      }

      // check if user can delete a post
      const canDelete = Roles.userIsInRole(
        this.userId,
        ['admin', 'editor'],
        Roles.GLOBAL_GROUP
      );

      if (! canDelete) {
        throw new Meteor.Error(
          'unauthorized',
          'Only admins and editors can delete posts.'
        );
      }

      // check the data sent by the user
      check(postId, String);

      Posts.remove({ _id: postId });
    },

    updatePost(post) {

      // check is user is connected
      if (!this.userId) {
        throw new Meteor.Error('not connected');
      }

      // check if user can update a post
      const canUpdate = Roles.userIsInRole(
        this.userId,
        ['admin', 'editor'],
        Roles.GLOBAL_GROUP
      );

      if (! canUpdate) {
        throw new Meteor.Error(
          'unauthorized',
          'Only admins and editors can update posts.'
        );
      }

      // check the data sent by the user
      const checkData = Match.test(
        post,
        { _id: String,
          title: String,
          content: String,
          slug: String,
          createdAt: Date }
      );
      if (!checkData) {
        throwMeteorErrors(
          ['title', 'content'],
          'The data sent is bad'
        );
      }

      post["slug"] = slugify(post.title);

      // validate data before update
      postUpsertSchema.validate(post);

      Posts.update(
        { _id: post._id },
        { $set: post }
      );
    }
  })
}