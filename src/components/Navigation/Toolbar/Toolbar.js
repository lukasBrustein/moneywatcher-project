import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ NavLink } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
const toolbar = (props) => (
    <header>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="./home">MoneyWatcher</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#header"></Nav.Link>
    </Nav>
    <Nav.Link href="/notifications">
    <NotificationsNoneIcon />
    </Nav.Link>
      <NavDropdown title="Lukas Brustein" id="basic-nav-dropdown">
        <Nav.Link href="/profile">
        
     
           <NavDropdown.Item as= {Button}>
                Profil
            </NavDropdown.Item>
        </Nav.Link>
        <NavDropdown.Divider />
        <NavDropdown.Item as= {Button}>Logout</NavDropdown.Item>
      </NavDropdown>
      <AccountCircleIcon style={{width:'3%', height:'3%'}}/>
  </Navbar.Collapse>
  
</Navbar>
    </header>
)
export default toolbar;