import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer/Footer';
import Header from './header/Header';
import Homepage from './Homepage';
import PostList from './post/PostList';
import PostDetails from './post/PostDetails';
import PostAdd from './post/PostAdd';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route exact path="/" component={ Homepage } />
          <Route path="/posts/" component={ PostList } />
          <Route path="/get-post/:slug" component={ PostDetails } />
          <Route path="/add-post" component={ PostAdd } />
          <Route path="/edit-post/:_id" component={ PostAdd } />
          <Footer />
        </div>
      </Router>
    )
  }
}
