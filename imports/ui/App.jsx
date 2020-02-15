import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer/Footer';
import Header from './header/Header';
import Homepage from './Homepage';
import PostList from './post/PostList';
import PostDetails from './post/PostDetails';
import PostAdd from './post/PostAdd';

class App extends Component {
  
  render() {
        
    if (this.props.isLoading) {
      return (<h1>Loading</h1>);
    } else {  
      return (
        <Router>
          <div className="App container">
            <Header />
            <Route exact path="/" component={ Homepage } />
            <Route path="/get-post/:slug" component={ PostDetails } />
            { this.props.currentUserIsAdmin || this.props.currentUserIsEditor ?   
              (<Fragment>
              <Route path="/posts/" component={ PostList } />
              <Route path="/add-post" component={ PostAdd } />
              <Route path="/edit-post/:_id" component={ PostAdd } />
              </Fragment>)
            : null }
            <Footer />
          </div>
        </Router>
      )
    }
  }
}
export default withTracker(() => {

  let isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'], 'medium');
  let isEditor = Roles.userIsInRole(Meteor.userId(), ['editor'], 'medium');
  let isLoading = Meteor.user() === undefined;

  console.log("isLoading: ", isLoading);
  console.log("isAdmin: ", isAdmin);
  console.log("isEditor: ", isEditor);

  return {
    isLoading: isLoading,
    currentUser: Meteor.user(),
    currentUserIsAdmin: isAdmin,
    currentUserIsEditor: isEditor,
  };  

})(App);

