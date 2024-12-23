import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import { getProfile } from '../../http/userAPI';
import { NavLink } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Context } from '../..';
import { ADMIN_ROUTE, HISTORY_ROUTE } from '../../utils/consts';
import Footer from '../Footer/Footer';
import {jwtDecode} from 'jwt-decode';

const ProfileComp = () => {
  const [userData, setUserData] = useState({});
  const { product } = useContext(Context);

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

  if (!product.products || product.products.length === 0) {
    return (
      <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Typography variant="h6" color="error">
          Нет данных для создания отчета.
        </Typography>
      </Box>
    );
  }

  const handleDownloadPDF = () => {
    try {
      const accessToken = localStorage.getItem('token');
      const userInfo = jwtDecode(accessToken); // Декодируем токен пользователя

      const pdfDoc = new jsPDF();
      pdfDoc.setFont("times", "bold");
      pdfDoc.setFontSize(14);
      const formattedDate = new Date().toLocaleDateString();
      pdfDoc.text(`Report about products`, 10, 10);
      pdfDoc.text(`Date of create: ${formattedDate}`, 10, 20);
      pdfDoc.text(`Creator of report: ${userInfo.email}`, 10, 30);

      // Формируем таблицу
      const firstTableColumns = ["Name of product", "Cost"];
      const firstTableBody = product.products.map((item) => [
        item.name || 'N/A',
        item.cost || 'N/A',
      ]);

      autoTable(pdfDoc, {
        theme: "grid",
        head: [firstTableColumns],
        body: firstTableBody,
        startY: 40, // Устанавливаем начальную позицию таблицы
      });

      // Сохраняем PDF
      pdfDoc.save("Отчет_о_продуктах.pdf");
    } catch (error) {
      console.error("Error creating PDF report:", error);
    }
  };

  const accountDetails = [
    { label: 'My Name:', value: userData.name || 'N/A' },
    { label: 'Email:', value: userData.email || 'N/A' },
    { label: 'Role:', value: userData.role || 'N/A' },
    { label: 'City:', value: userData.city || '' },
    { label: 'Phone:', value: userData.phone || '' },
    { label: 'Country:', value: userData.country || 'United States' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto 10% auto' }}>
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

        {userData.role === 'ADMIN' && (
          <Box sx={{ marginTop: '20px' }}>
            <Button variant="contained" color="primary">
              <NavLink to={ADMIN_ROUTE}>Админ-панель</NavLink>
            </Button>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button variant="outlined" color="secondary">
            <NavLink to={HISTORY_ROUTE}>History Of Orders</NavLink>
          </Button>
          <Button onClick={handleDownloadPDF} variant="outlined" color="secondary">
            Download report all products
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProfileComp;
