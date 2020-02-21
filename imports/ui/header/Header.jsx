import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link, NavLink } from 'react-router-dom';
import logo from './Logo_EPFL.svg';

class Header extends Component {

  logMeOutNow = () => {
    Meteor.logout()
    this.props.history.push('/');
  }

  displayLoginLogout = () => {
    if (this.props.currentUser) {
      return <a className="logout-link" href="" onClick={this.logMeOutNow}>Logout</a>
    } else {
      return <a className="login-link" href="/posts">Login</a>
    }
  }
  render() {
    let content;
    if (this.props.isLoading) {
      content = <h1>Loading ...</h1>
    } else {
      content =  (
        <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <Link className="navbar-brand" to="/"><img src={ logo } className="App-logo" alt="logo"/></Link>
          <div className="collapse navbar-collapse">
            { this.props.isPrivatePage && (this.props.currentUserIsAdmin || this.props.currentUserIsEditor) ?
              (<ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Articles
                  </a>
                  <div className="dropdown-menu" >
                    <NavLink className="dropdown-item" to="/posts/" activeClassName="active">Gérer les articles</NavLink>
                    <NavLink className="dropdown-item" to="/add-post" activeClassName="active">Ajouter un nouvel article</NavLink>
                  </div>
                </li>
              </ul>)
            : null
            }
          </div>
          <div className="userMenu">
            { this.displayLoginLogout() }
          </div>
        </header>
      )
    }
    return content;
  }
}
export default withRouter(withTracker((props) => {

  if (Meteor.userId()) {

    let isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'], 'medium');
    let isEditor = Roles.userIsInRole(Meteor.userId(), ['editor'], 'medium');
    let currentUser = Meteor.user();
    let isLoading = currentUser == undefined;

    return {
      isLoading: isLoading,
      isPrivatePage: true,
      currentUser: currentUser,
      currentUserIsAdmin: isAdmin,
      currentUserIsEditor: isEditor,
    };

  } else {

    return {
      isLoading: false,
      isPrivatePage: false,
    }
  }
})(Header));