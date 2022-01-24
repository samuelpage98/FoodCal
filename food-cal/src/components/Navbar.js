import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
const pageLink = ['/', '/calendar', '/meal-library', '/shopping-list']

function Navbar() {
    const pageURL = window.location.href;
    let activePage;
    for(const element of pageLink){
        if(pageURL.slice(21,pageURL.length) === element){
            activePage =  pageLink.indexOf(element)
            break
        }
    }
    const navStyle = [{color: 'black' },{color: 'black' },{color: 'black' },{color: 'black' }];
    navStyle[activePage] = {backgroundColor: alpha('#00AB55',0.7), color: 'white'}
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                {/* <Divider /> */}
                <List>
                    {['Dashboard', 'Calendar', 'Meal Library', 'Shopping List'].map((text, index) => (
                        
                        <Link to={pageLink[index]} style={{textDecoration: 'none'}}>
                            <ListItem button key={text} style={navStyle[index]}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Box>

            </Box>
        </Box>
    );
}

export default Navbar;