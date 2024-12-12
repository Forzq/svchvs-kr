import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Account.css'
import { useContext } from 'react';
import { Context } from '../..';
import { useObserver } from 'mobx-react-lite';
import {useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

export default function MenuAppBar() {

  const {user} = useContext(Context)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    handleClose();
    user.setIsAuth(true);
  };
  const handleLogOut = () => {
    handleClose();
    user.setUser({})
    user.setIsAuth(false);
  };
  return useObserver(() =>(
      
        <Toolbar >
            <div >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >{user.isAuth ?
                <div className="menu">
                <MenuItem className='pupu' onClick={() => navigate(PROFILE_ROUTE)}>Profile</MenuItem>
                <MenuItem className='pupu' onClick={handleLogOut}>Log out</MenuItem>
                </div>
                 :
                 <div className="menu">
                 <MenuItem className='pupu' onClick={() => navigate(LOGIN_ROUTE)} >Login</MenuItem>
                 <MenuItem className='pupu' onClick={() => navigate(REGISTRATION_ROUTE)}>Register</MenuItem>
                 </div>
                }
              </Menu>
            </div>
        </Toolbar>
  ));
}