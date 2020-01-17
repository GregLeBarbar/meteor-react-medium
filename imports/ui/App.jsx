import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Posts from './post/Post';

export default class App extends Component {

  render() {
    return (
      <div className="App container">
        <Header />
        <Posts />
        <Footer />
      </div>
    )
  }
}
