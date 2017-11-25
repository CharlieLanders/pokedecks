import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import PokeDecksLogo from './PokeDecksLogo.png';
import './Header.css';
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  render() {
    return (
      <Navbar className="header">
        <NavbarBrand className="header_brand">
          <img src={PokeDecksLogo} />
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
