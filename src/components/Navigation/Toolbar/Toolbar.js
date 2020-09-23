import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ NavLink } from 'react-router-dom';
import  Button  from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import IconButton from '@material-ui/core/IconButton';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';



const toolbar = (props) => (
    <header>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="./home" style={{fontFamily: 'Helvetica'}}>MoneyWatcher</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#header"></Nav.Link>
    </Nav>
    <Nav.Link href="/notifications">
      <IconButton color="primary">
            <NotificationsOutlinedIcon/>
      </IconButton>
    </Nav.Link>
    <Nav.Link href="/calendar">
      <IconButton color="primary">
        <CalendarTodayOutlinedIcon />
      </IconButton>
    </Nav.Link>
    <Button color="primary">
      <NavDropdown title="Lukas Brustein" id="basic-nav-dropdown" style={{fontFamily: 'Helvetica'}}>
        <Nav.Link href="/profile">
           <NavDropdown.Item as= {Button}><AccountCircleIcon/>Profil</NavDropdown.Item>
        </Nav.Link>
        <NavDropdown.Divider />
        <NavDropdown.Item as= {Button}><PowerSettingsNewOutlinedIcon />Logout</NavDropdown.Item>
      </NavDropdown>
      </Button>
     
  </Navbar.Collapse>
  
</Navbar>
    </header>
)
export default toolbar;