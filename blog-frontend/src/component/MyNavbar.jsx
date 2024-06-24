import React, { useEffect, useState } from 'react';
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

import { Navigate, NavLink as ReactLink, useFetcher, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUser, isLogin } from '../auth';


const MyNavbar = () => {

  const nav=useNavigate();

  const [isOpen,setIsOpen]=useState(false);

  const [login,setLogin]=useState(false);
  const [user,setUser]=useState(undefined);


  useEffect(()=>{

    setLogin(isLogin());
    setUser(getCurrentUser());

  },[])



  const logout=()=>{

    doLogout();
    setLogin(false);
    nav("/")
    

  }

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
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                SignUp
              </NavLink>
            </NavItem> */}

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


          <Nav>

          {
            login && (

              <>
              
            <NavItem>
              <NavLink tag={ReactLink} to={`/myInfo/${user.uid}`}>
                Profile Info
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/userDashbord">
                  {user.email}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={logout}>
                logout
              </NavLink>
            </NavItem>

                </>

            )
          }

          {
              !login && (

                <>
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
                </>
              )
          }
          </Nav>


          
       
        </Collapse>
      </Navbar>

    </div>
  )
}

export default MyNavbar
