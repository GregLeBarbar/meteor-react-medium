import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

class PostDetails extends Component {

  render() {
    let content;    
    if (this.props.posts.length == 0) {
      content = "Loading";
    } else {
      const slug = this.props.match.url.split("/get-post/")[1];
      const post = this.props.posts.find(post => post.slug === slug);
      content = (
        <div className="card mb-2 my-2">
          <div className="card-body">
            <div className="text-center">
              <h4 className="card-title">{post.title}</h4>
              <h6 className="card-subtitle text-muted mb-2">
                Publié le { moment(post.createdAt).format('DD-MM-YYYY') }
              </h6>
              <p className="card-text text-left" style={ { "whiteSpace": "pre-line"}}>
              { post.content }
              </p>
            </div>
          </div>
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
})(PostDetails);
