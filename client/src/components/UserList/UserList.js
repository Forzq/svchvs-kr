import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button } from '@mui/material';
import './UserList.css'; // Подключаем файл стилей
import HeaderComp from '../HeaderComp/HeaderComp';
import { ADMIN_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {jwtDecode} from 'jwt-decode';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  

  // Пример получения данных пользователей
  useEffect(() => {
    const fetchUsers = async()=>{
    const response = await fetch(process.env.REACT_APP_API_URL + 'api/Users') // Убедитесь, что '/api/users' правильный эндпоинт
       
        console.log(response)
        const data=await response.json();
        setUsers(data)
      }
      fetchUsers()
}, []);

const HandleDownloadPDF = () => {
  try {
    const accessToken = localStorage.getItem('token');
    const userInfo = jwtDecode(accessToken); // Декодируем токен пользователя

    const pdfDoc = new jsPDF();
    pdfDoc.setFont("times", "bold");
    pdfDoc.setFontSize(14);
    const formattedDate = new Date().toLocaleDateString();
    pdfDoc.text(`Report about users`, 10, 10);
    pdfDoc.text(`Date of create: ${formattedDate}`, 10, 20);
    pdfDoc.text(`Creator of report: ${userInfo.email}`, 10, 30);

    // Формируем таблицу
    const firstTableColumns = ["id", "email", "role"];
    const firstTableBody = users.map((item) => [
      item.id || 'N/A',
      item.email || 'N/A',
      item.role || 'N/A',
    ]);

    autoTable(pdfDoc, {
      theme: "grid",
      head: [firstTableColumns],
      body: firstTableBody,
      startY: 40, // Устанавливаем начальную позицию таблицы
    });

    // Сохраняем PDF
    pdfDoc.save("Отчет_о_пользователях.pdf");
  } catch (error) {
    console.error("Error creating PDF report:", error);
  }
};

  return (
    <>
    <HeaderComp/>
    <Box className="users-list-container">
      <Typography variant="h4" component="h1" className="users-list-title">
        Список пользователей
      </Typography>
      <TableContainer component={Paper} className="users-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Роль</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' sx={{mt:3}}>
      <Link  to={ADMIN_ROUTE}>Back</Link>
      </Button>
      <Button variant='contained' onClick={HandleDownloadPDF} sx={{mt:3}}>
      Download report
      </Button>
      
    </Box>
    </>
  );
}
