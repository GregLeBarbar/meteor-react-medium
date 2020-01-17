import React from 'react';
import logo from './Logo_EPFL.svg';

export default Header = () => {

  let content;

  content =  (
    <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <a className="navbar-brand" to="/"><img src={ logo } className="App-logo" alt="logo"/></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto"> 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Articles
            </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item">Ajouter un nouvel article</a>
            </div>
          </li>
        </ul>                                  
      </div>
    </header>
  )

  return content;
}