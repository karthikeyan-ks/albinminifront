import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ContactPage, Dashboard, Details, Home, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TemporaryDrawer = ({click,handleOpen}) => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const toggleDrawer = (anchor, newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(!newOpen){
        handleOpen()
    }
    setOpen(newOpen);
  };
  useEffect(()=>{
    console.log(click)
    setOpen(click)
    toggleDrawer('left',click)
    //handleOpen()
  },[click])

  const list = (anchor) => (
    <div
      sx={{ width: 250 }} // Style the list container directly
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button
        onClick={(eve)=>{
            navigate('/dashboard')
        }}
        >
          <ListItemIcon>
            <Dashboard/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem 
         onClick={(eve)=>{
            navigate('/home')
        }}
        button>
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem 
         onClick={(eve)=>{
            navigate('/profile')
        }}
        button>
          <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem 
         onClick={(eve)=>{
            navigate('/about')
        }}
        button>
          <ListItemIcon>
            <Details/>
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
         onClick={(eve)=>{
            navigate('/contacts')
        }}
         button>
          <ListItemIcon>
            <ContactPage/>
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
