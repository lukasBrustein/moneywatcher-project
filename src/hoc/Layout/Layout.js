import React, {Component} from 'react';
import Aux from './../Auxiliary/Auxiliary';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Sidenav from './../../components/Navigation/Sidenav/Sidenav';

class Layout extends React.Component {
    render() {
        return (
        <Aux> 
            <Toolbar />
            <Sidenav />
            
        </Aux>
        )
    }
}

export default Layout;
        