import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <Link className="navbar-brand ml-3" to="/">Chatty</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <button className="btn btn-success mr-3 d-inline-block" onClick={() => auth().signOut()}>LOGOUT</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">Log In</Link>
              <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;