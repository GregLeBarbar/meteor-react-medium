import { Meteor } from 'meteor/meteor';
import { Posts, postUpsertSchema } from '../api/collections';
import slugify from 'slugify';
import './error';

Meteor.methods({

  insertPost(newData) {
    const newPost = {
      title: newData.title,
      content: newData.content,
      slug: slugify(newData.title),
      createdAt: new Date(),
    }
    postUpsertSchema.validate(newPost);
    Posts.insert(newPost);
  },
  
  removePost(postId) {
    Posts.remove({ _id: postId });
  }
})