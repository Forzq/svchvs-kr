import React, { useContext } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import { Context } from '../../index';


const ProfileComp = () => {
  const {user} = useContext(Context)
  console.log("vot", user)
  const accountDetails = [
    { label: 'My Name:', value: 'user' },
    { label: 'Company:', value: '' },
    { label: 'Address1:', value: '' },
    { label: 'City:', value: '' },
    { label: 'Phone:', value: '' },
    { label: 'Country:', value: 'United States' },
  ];

  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Account
      </Typography>

      {accountDetails.map((detail, index) => (
        <Box key={index} sx={{ marginBottom: '10px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {detail.label}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">
                {detail.value || ' '}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="outlined" color="secondary">
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileComp;
