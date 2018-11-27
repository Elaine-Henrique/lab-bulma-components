import React, { Component } from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
          <div className="navbar-start">
              <a className="navbar-item">Home</a>
          </div>          
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">Sign up</a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }   
}



export default Nav;
