import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

class PostDetails extends Component {
  render() {
    let content;    
    if (this.props.loading) {
      content = "Loading";
    } else {
      content = (
        <div className="card mb-2 my-2">
          <div className="card-body">
            <div className="text-center">
              <h4 className="card-title">{ this.props.post.title }</h4>
              <h6 className="card-subtitle text-muted mb-2">
                Publié le { moment(this.props.post.createdAt).format('DD-MM-YYYY') }
              </h6>
              <p className="card-text text-left" style={ { "whiteSpace": "pre-line"}}>
              { this.props.post.content }
              </p>
            </div>
          </div>
        </div>
      )
    }
    return content;
  }
}
export default withTracker((props) => {
  Meteor.subscribe('post', props.match.params.slug);
  let posts = Posts.find({slug: props.match.params.slug}).fetch();
  let loading = posts.length == 0;
  return {
    loading: loading,
    post: posts[0],
  }
})(PostDetails);
