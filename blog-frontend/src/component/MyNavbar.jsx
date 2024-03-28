import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import { NavLink as ReactLink } from 'react-router-dom';


const MyNavbar = () => {

  const [isOpen,setIsOpen]=useState(false);



  return (
    <div>
      
      <Navbar color='dark'
              dark
              expand="md"
              fixed=''>

        <NavbarBrand href="/">MyBlogApp</NavbarBrand>
        <NavbarToggler onClick={()=> setIsOpen(!isOpen)}  />    {/*  toggle button   */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink  tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                SignUp
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Service</DropdownItem>
                <DropdownItem>Contac Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>YouTube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>YouTube</NavbarText>
        </Collapse>
      </Navbar>

    </div>
  )
}

export default MyNavbar
