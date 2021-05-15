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
} from 'reactstrap';
import pinterestBadge from '../styles/assets/pinterestBadge.webp';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="xl" sticky="top">
        <NavbarBrand href="/"><img src={pinterestBadge} alt="Logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/boards">Boards</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/add-pins">Add Pins</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/add-boards">Add Board</Link>
            </NavItem>
          </Nav>
          {user !== null
            && <div className='auth-btn-container'>
              {
                user ? <Button color='danger' onClick={signOutUser}>SignOut?</Button>
                  : <Button color='info' onClick={signInUser}>SignIN!</Button>
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
