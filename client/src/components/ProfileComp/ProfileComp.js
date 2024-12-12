import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import { getProfile } from '../../http/userAPI';

const ProfileComp = () => {
  const [userData, setUserData] = useState({}); // Храним данные пользователя

  // Функция для получения данных пользователя
  const fetchUserData = async () => {
    try {
      const data = await getProfile();
      setUserData(data); // Сохраняем данные пользователя в состоянии
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchUserData();
  }, []);

  // Создаем массив данных для отображения
  const accountDetails = [
    { label: 'My Name:', value: userData.name || 'N/A' },
    { label: 'Email:', value: userData.email || 'N/A' },
    { label: 'Role:', value: userData.role || 'N/A' },
    { label: 'Company:', value: userData.company || '' },
    { label: 'Address:', value: userData.address1 || '' },
    { label: 'City:', value: userData.city || '' },
    { label: 'Phone:', value: userData.phone || '' },
    { label: 'Country:', value: userData.country || 'United States' },
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
          History Of Orders
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileComp;
