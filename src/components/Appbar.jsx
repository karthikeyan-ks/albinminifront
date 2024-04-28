import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ConnectionContext } from './ConnectionContext';
import { useState } from 'react';

const initialState = {
  anchorEl: null,
  open: false,
};

export default function Appbar({ handleOpen }) {
  const { login, response,search } = useContext(ConnectionContext);
  const navigate = useNavigate();
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    setState({
      anchorEl: event.currentTarget,
      open: !state.open,
    });
  };
  const [job,setJobs]=useState()
  const [location,setLocation]=useState()

  const handleClose = () => {
    setState(initialState);
  };

  const handleSearch = (event) => {
    // Implement search functionality using the search term
    const searchTerm = event.target.value;
    console.log('Search term:', searchTerm);
    // (e.g., fetch search results, navigate to a search page)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jobs Now
          </Typography>
          {typeof response.login !== 'string' && response.login !== null && (
            <Typography sx={{ paddingRight: '10px' }} variant="p">
              Welcome {response.login[0].name !== null ? response.login[0].name : ''}
            </Typography>
          )}
          <IconButton color="inherit" aria-label="search" onClick={handleClick}>
            <SearchIcon />
          </IconButton>
          <Button
            onClick={() => navigate('/login')}
            color="inherit"
          >
            {login ? 'logout' : 'login'}
          </Button>
          <Popper
            open={state.open}
            anchorEl={state.anchorEl}
            onClose={handleClose}
            placement="bottom-end"
          >
            <Box sx={{ padding: 1,bgcolor:"lightgray",borderRadius:"10px" ,marginTop:1}}>
              <TextField
                fullWidth
                value={job}
                sx={{bgcolor:"lightgray",padding:1}}
                label="enter the job"
                variant="outlined"
                onChange={(eve)=>{
                    setJobs(eve.currentTarget.value)
                }}
              />
               <TextField
                fullWidth
                value={location}
                onChange={(eve)=>{
                    setLocation(eve.currentTarget.value)
                }}
                sx={{bgcolor:"lightgray",padding:1}}
                label="enter the location"
                variant="outlined"
              />
              <Button
                onClick={(eve)=>{

                    console.log(job,location)
                    search(job,location)
                }}
              >search</Button>
            </Box>
          </Popper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
