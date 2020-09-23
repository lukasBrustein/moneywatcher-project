import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

const sidenav = (props) => (
    <div>
         <Drawer
        variant="permanent"
        anchor="left"
      >
 
        <Divider />
        <List style={{marginTop: '30%'}}>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <PieChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AttachMoneyOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Kontodaten" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <TimelineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Historie" />
            </ListItem>
        </List>
        </Drawer>
    </div>
)
export default sidenav;