import { Meteor } from 'meteor/meteor';
import { Posts, postUpsertSchema } from '../api/collections';
import slugify from 'slugify';
import './error';

Meteor.methods({

  insertPost(newData) {
    console.log(newData);
    const newPost = {
      title: newData.title,
      content: newData.content,
      slug: slugify(newData.title),
      createdAt: new Date(),
    }
    console.log(newPost);
    postUpsertSchema.validate(newPost);
    console.log("Validate ok");
    Posts.insert(newPost);
    console.log("Insert ok");
  },

  removePost(postId) {
    Posts.remove({ _id: postId });
  }
})