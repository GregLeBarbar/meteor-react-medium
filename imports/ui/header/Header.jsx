import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Logo_EPFL.svg';

export default Header = () => {

  let content;

  content =  (
    <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <Link className="navbar-brand" to="/"><img src={ logo } className="App-logo" alt="logo"/></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto"> 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Articles
            </a>
            <div className="dropdown-menu" >
              <NavLink className="dropdown-item" exact to="/" activeClassName="active">Voir la liste des articles</NavLink>
              <NavLink className="dropdown-item" to="/add-post" activeClassName="active">Ajouter un nouvel article</NavLink>
            </div>
          </li>
        </ul>                                  
      </div>
    </header>
  )
  
  return content;
}