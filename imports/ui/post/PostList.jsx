import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/collections';
import moment from 'moment';

class PostElement extends Component {

  render() {
    let content;
    const element = (
      <tr>
        <td>{ this.props.index+1 }</td>
        <td>{ this.props.post.title }</td>
        <td>{ this.props.post.slug }</td>
        <td>{ moment(this.props.post.createdAt).format('DD-MM-YYYY hh:mm:ss') }</td>
        <td>
          <button 
            type="button" 
            className="btn btn-outline-primary" 
            onClick={ () => this.props.callBackDeletePost(this.props.post._id) }
            >Supprimer</button>
        </td>
      </tr>
    );
    content = (
      <tbody>
        { element }
      </tbody>
    )
    return content;
  }
}

class PostList extends Component {

  deletePost = (postId) => {
    Meteor.call("removePost", postId);
  }

  render() {
    let content;
    if (this.props.posts.length === 0) {
      content = <h1>Loading...</h1>;
    } else {
      content = (
        <div className="container">
          <h4 className="py-4">Medium</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre</th>
                <th scope="col">Slug</th>
                <th scope="col">Date de création</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {this.props.posts.map( (post, index) => (
              <PostElement 
                key={ post._id }
                post={ post }
                index={ index }
                callBackDeletePost={ this.deletePost }
              />
            ))}
          </table>
        </div>
      )
    }
    return content;
  }
}
export default withTracker(() => {
  let posts = Posts.find({}).fetch();
  return {
    posts: posts,
  }
})(PostList);
