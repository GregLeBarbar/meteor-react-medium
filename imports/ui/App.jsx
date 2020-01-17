import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer/Footer';
import Header from './header/Header';
import { ListPosts } from './post/ListPosts';
import { GetPost } from './post/GetPost';
import { AddPost } from './post/AddPost';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route exact path="/" component={ ListPosts } />
          <Route path="/get-post/:url" component={ GetPost } />
          <Route path="/add-post" component={ AddPost } />
          <Route path="/edit-post/:_id" component={ AddPost } />
          <Footer />
        </div>
      </Router>
    )
  }
}
