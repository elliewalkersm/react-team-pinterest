import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Input
} from 'reactstrap';
import pinterestBadge from '../styles/assets/pinterestBadge.webp';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <Navbar color="light" light expand="xl" sticky="top">
        <Nav className="mr-auto" navbar>
          <NavbarBrand href="/"><img src={pinterestBadge} alt="Logo" className="logo" /></NavbarBrand>
          <NavItem><a className="nav-link" href="https://www.pinterest.com/">Home</a></NavItem>
          <NavItem><Link className="nav-link" href="#">Favorites</Link></NavItem>
        </Nav>
        <Input fluid="true" className="search-bar-input-container ml-2 mr-2" type="text" size="sm" placeholder="search" />
        <NavbarToggler onClick={toggle} /><Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem><Link className="nav-link" to="/boards">Boards</Link></NavItem>
            <NavItem><Link className="nav-link" to="/add-pins">Pins</Link></NavItem>
            <NavItem><Link className="nav-link" to="/add-boards">Board</Link></NavItem>
          </Nav>

          {user !== null && <div className='auth-btn-container'>
            {user ? <Button className="signOut-btn ml-3" color='danger' size="sm" onClick={signOutUser}>Sign Out</Button>
              : <Button className="sign-in-btn ml-3" color='danger' size="sm" onClick={signInUser}>Sign In</Button>
            }
          </div>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
