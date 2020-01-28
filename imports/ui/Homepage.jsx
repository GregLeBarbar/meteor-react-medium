import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/collections';
import moment from 'moment';
import { Link } from 'react-router-dom';

PostSingle = (props) => {
  return (
    <div className="card mb-2">
      <div className="card-body">  
        <h5 className="card-title">
          <Link to={`/get-post/${ props.post.slug }`}>{ props.post.title }</Link>
        </h5>
        <span className="card-subtitle text-muted">
          Publié le { moment(props.post.createdAt).format('DD-MM-YYYY') }
        </span>
        <div>{ props.post.content }</div>
      </div>    
    </div>
  )
}

class Homepage extends Component {
  render() {
    let content;
    if (this.props.posts.length === 0) {
      content = <h1>Loading...</h1>;
    } else {
      content = (
        <div className="container">
          <h4 className="py-4">Medium</h4>
          {this.props.posts.map( (post, index) => (
            <PostSingle post={ post } key={ post._id } />
          ))}
        </div>
      )
    }
    return content;
  }
}
export default withTracker(() => {
  Meteor.subscribe('posts');
  let posts = Posts.find({}, { sort: {createdAt: -1} }).fetch();
  return {
    posts: posts,
  }
})(Homepage);
