import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import './UserList.css'; // Подключаем файл стилей

export default function UsersList() {
  const [users, setUsers] = useState([]);

  // Пример получения данных пользователей
  useEffect(() => {
    fetch('/api/users') // Убедитесь, что '/api/users' правильный эндпоинт
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => console.error('Ошибка при загрузке данных:', error));
}, []);


  return (
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
    </Box>
  );
}
