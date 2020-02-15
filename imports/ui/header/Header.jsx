import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link, NavLink } from 'react-router-dom';
import logo from './Logo_EPFL.svg';

Header = (props) => {

  let content;
  if (props.loading) {
    content = <h1>Loading ...</h1>
  } else {
    content =  (
      <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <Link className="navbar-brand" to="/"><img src={ logo } className="App-logo" alt="logo"/></Link>
        { props.currentUserIsAdmin || props.currentUserIsEditor ?   
          (<Fragment>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto"> 
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Articles
                  </a>
                  <div className="dropdown-menu" >
                    <NavLink className="dropdown-item" to="/posts/" activeClassName="active">Gérer les articles</NavLink>
                    <NavLink className="dropdown-item" to="/add-post" activeClassName="active">Ajouter un nouvel article</NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </Fragment>)
        : null }
        <div> Utilisateur connecté: <a target="_blank"> { props.currentUser.username }</a></div>
      </header>
    )
  }
  return content;
}
export default withTracker(() => {

  let isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'], 'medium');
  let isEditor = Roles.userIsInRole(Meteor.userId(), ['editor'], 'medium');
  let currentUser = Meteor.user();
  let loading = currentUser == undefined;

  return {
    loading: loading,
    currentUser: currentUser,
    currentUserIsAdmin: isAdmin,
    currentUserIsEditor: isEditor,
  };
})(Header);