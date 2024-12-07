import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import '../Auth/Auth.css'; // Import the CSS file
import { useLocation, NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';



const Auth = () => {

    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="sign-in-form" // Apply CSS class
    >
      {isLogin ?
      <Typography variant="h5" gutterBottom className="sign-in-title">
        Sign In
      </Typography>
       :
      <Typography variant="h5" gutterBottom className="sign-in-title">
      Create an account
    </Typography>
      }
      <Typography variant="body2" gutterBottom className="sign-in-subtitle">
        Insert your account information:
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box component="span" sx={{ mr: 1 }}>✉️</Box>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <Box component="span" sx={{ mr: 1 }}>🔒</Box>
            </InputAdornment>
          ),
        }}
      />

        {isLogin ? 
        <Typography variant="body2" gutterBottom className="register-link">
        If you have not an account, please <NavLink to={REGISTRATION_ROUTE}>Register Here</NavLink>
      </Typography>
        :
        <Typography variant="body2" gutterBottom className="register-link">
        If you have an account, please <NavLink to={LOGIN_ROUTE}>Login Here</NavLink>
      </Typography>
        }
      {isLogin ?       
      <Button variant="contained" type="submit" className="login-button">
        LOGIN
      </Button>
      :
      <Button variant="contained" type="submit" className="login-button">
      Register
    </Button>
      }

    </Box>
  );
};

export default Auth;