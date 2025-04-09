import React, { Component } from "react";
import { render } from "react-dom";
// import Latest from "./latest_trek";
// import LatestTrek from "../../components/homefour/LatestTrek";

import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Route} from "react-router";
import { Link } from 'react-router-dom';
import LatestTrek from "./LatestTrek";


function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" href="/">
          TREK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>

            <Link to="/me" className="nav-item nav-link">Home</Link>
        
            
            <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/home" className="nav-item nav-link">Home</Link>  
            <Link to="/home" className="nav-item nav-link">Home</Link>
            <Link to="/home" className="nav-item nav-link">Home</Link>
          </div>
        </div>
      </nav>
      
      <Route path="/me" exact render={() => <h1>hello</h1> } />
      <Route path="/home" exact component={LatestTrek} />
    </div>
    
  );
}

export default Navbar;
