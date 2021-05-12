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
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/boards">Boards</Link>
            </NavItem>
<<<<<<< HEAD
            {/* <NavItem>
              <Link className="nav-link" to="/pins">Pins</Link>
            </NavItem> */}
=======
            <NavItem>
              <Link className="nav-link" to="/add-pins">Add Pins</Link>
            </NavItem>
>>>>>>> 4c1ee43cfaf47036725b1a5d91feb938df6369fe
            <NavItem>
              <Link className="nav-link" to="/add-boards">Add Board</Link>
            </NavItem>
          </Nav>
          { user !== null
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
