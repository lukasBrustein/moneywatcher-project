import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Toolbar.css';

const toolbar = () => (
  <div>
    <AppBar position="static" style={{maxWidth:"100%"}}>
      <Toolbar>
        <h4 style={{fontFamily:"Arial"}}>MoneyWatcher</h4>
        <IconButton color="inherit" style={{marginLeft: '60vw', marginRight: '2vw'}}>
          <MailIcon/>
        </IconButton>
        <IconButton color="inherit" style={{marginRight: '2vw'}}>
          <NotificationsIcon />
        </IconButton>
        <Button>
        <NavDropdown title="Lukas Brustein" id="nav-dropdown">
          <NavDropdown.Item>Profil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)
export default toolbar;