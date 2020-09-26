import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Nav from 'react-bootstrap/Nav';
import classes from './Sidenav.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import  Button  from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function changeColor(e) {
    e.target.style.color = 'blue';
}
function changeColorBack(e) {
    e.target.style.color = 'grey';
}

const sidenav = () => (
    <div className="sidenav">
    <List disablePadding dense className="list" style={{marginTop: "5vh", marginLeft: "0.5vw"}}>
        <ListItem>
            <Nav.Link href="/home">
            <Button onMouseOver={changeColor} onMouseOut={changeColorBack}>
            <ListItemText className="list-text">Dashboard</ListItemText>
            <KeyboardArrowRightIcon style={{color: 'grey'}}/>
            </Button>
            </Nav.Link>
        </ListItem>
        <ListItem>
            <Nav.Link href="/kontodaten">
        <Button  onMouseOver={changeColor} onMouseOut={changeColorBack}>
            <ListItemText className="list-text">Kontodaten</ListItemText>
            <KeyboardArrowRightIcon style={{color: 'grey'}}/>
            </Button>
            </Nav.Link>
        </ListItem>
        <ListItem>
            <Nav.Link href="/historie">
            <Button  onMouseOver={changeColor} onMouseOut={changeColorBack}>
            <ListItemText className="list-text">Historie</ListItemText>
            <KeyboardArrowRightIcon style={{color: 'grey'}}/>
            </Button>
            </Nav.Link>
        </ListItem>
    </List>
    </div>
);

export default sidenav;