import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import { getProfile } from '../../http/userAPI';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Context } from '../..';
import { HISTORY_ROUTE } from '../../utils/consts';

const ProfileComp = () => {
  const [userData, setUserData] = useState({});
  const { product } = useContext(Context); // Получение данных из контекста


  const fetchUserData = async () => {
    try {
      const data = await getProfile();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
    // Проверка на наличие данных
    if (!product.products || product.products.length === 0) {
      return (
        <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="h6" color="error">
            Нет данных для создания отчета.
          </Typography>
        </Box>
      );
    }
    console.log(userData.id)

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

  const handleDownloadPDF = () => {
    const pdfDoc = new jsPDF();
    pdfDoc.text('Отчет о продажах за месяц', 20, 20);
  
    const firstTableColumns = [
      { title: 'Name', dataKey: 'name' },
      { title: 'Cost', dataKey: 'cost' },
    ];
  
    // Проверьте, чтобы `product.products` был массивом объектов
    const tableData = product.products || [];
  
    autoTable(pdfDoc, {
      theme: 'grid',
      headStyles: { fontSize: 12, fillColor: [200, 200, 200] },
      bodyStyles: { fontSize: 10 },
      columns: firstTableColumns,
      body: tableData, // Данные таблицы
    });
  
    pdfDoc.save('Отчет_о_продажах.pdf');
  };
  

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
        <Button  variant="outlined" color="secondary">
          <NavLink to={HISTORY_ROUTE}>History Of Orders</NavLink>
        </Button>
        <Button onClick={handleDownloadPDF} variant="outlined" color="secondary">
          Download report all products
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileComp;
