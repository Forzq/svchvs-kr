import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button } from '@mui/material';
import './UserList.css'; // Подключаем файл стилей
import HeaderComp from '../HeaderComp/HeaderComp';
import { ADMIN_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';

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
      
    </Box>
    </>
  );
}
