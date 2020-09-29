import React, {Component} from 'react';
import Aux from './../Auxiliary/Auxiliary';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Sidenav from './../../components/Navigation/Sidenav/Sidenav';
import Topnav from './../../components/Navigation/Topnav/Topnav';

class Layout extends React.Component {
    render() {
        return (
        <Aux> 
            <Toolbar />
            <Topnav style={{width:"5px"}}/>
            <Sidenav />
          
        </Aux>
        )
    }
}

export default Layout;
        