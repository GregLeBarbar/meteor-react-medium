import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import messageBox from './ValidationMessage';

function isRequired() {
  if (this.value === '') {
      return "required";
  }
}

const postUpsertSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
  },
  title: {
    label: "Titre",
    type: String,
    max: 30,
    custom: isRequired,
  },
  slug: {
    type: String,
    min: 1,
    custom: isRequired,
  },
  content: {
    label: "Contenu",
    type: String,
    max: 5000,
    custom: isRequired,
  },
  createdAt: {
    type: Date,
    custom: isRequired,
  }
}, { check });

postUpsertSchema.messageBox = messageBox;

const Posts = new Mongo.Collection('posts');

export { 
  postUpsertSchema, 
  Posts, 
  isRequired 
};