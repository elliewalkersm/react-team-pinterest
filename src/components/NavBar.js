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

  const authenticated = () => (
    <Nav className="ml-auto" navbar>
      <NavItem><Link className="nav-link mr-3" to="/boards">Boards</Link></NavItem>
      <NavItem><Link className="nav-link mr-3" to="/add-pins">Add Pin</Link></NavItem>
      <NavItem><Link className="nav-link mr-3" to="/add-boards">Add Board</Link></NavItem>
    </Nav>
  );

  return (
    <div className="navbar-container mx-auto">
      <Navbar color="light" light expand="xl" sticky="top">
        <Nav className="mr-auto" navbar>
          <NavbarBrand href="/"><img src={pinterestBadge} alt="Logo" className="logo mr-2 ml-3" /></NavbarBrand>
          <NavItem><a className="nav-link mr-3 ml-3" href="https://www.pinterest.com/">Home</a></NavItem>
          <NavItem><Link className="nav-link mr3" href="#">Favorites</Link></NavItem>
        </Nav>
        <Input fluid="true" className="search-bar-input-container w-50 ml-2 mr-2" type="text" size="sm" placeholder="search" />
        <NavbarToggler onClick={toggle} /><Collapse isOpen={isOpen} navbar>
          { user && authenticated()}

          {user !== null && <div className='auth-btn-container ml-2 mr-4'>
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
