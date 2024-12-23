import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CreateProduct from '../../modals/CreateProduct';
import DeleteServiceModal from '../../modals/DeleteProduct';
import UpdateProductModal from '../../modals/UpdateProduct';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'; // Используем useNavigate для маршрутизации
import './AdminPanel.css';
import HeaderComp from '../HeaderComp/HeaderComp';
import Footer from '../Footer/Footer';

export default function AdminPanel() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const navigate = useNavigate(); // Хук для навигации

  const handleOpenCreateModal = () => setCreateModalOpen(true);
  const handleCloseCreateModal = () => setCreateModalOpen(false);

  const handleOpenDeleteModal = (serviceId) => {
    setSelectedServiceId(serviceId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedServiceId(null);
    setDeleteModalOpen(false);
  };

  const handleOpenUpdateModal = () => setUpdateModalOpen(true);
  const handleCloseUpdateModal = () => setUpdateModalOpen(false);

  const handleGoToMainScreen = () => {
    navigate('/'); // Используем navigate для перехода на главную страницу
  };

  const handleGoToUsersList = () => {
    navigate('/userlist'); // Используем navigate для перехода на страницу списка пользователей
  };

  return (
    <>
    <div className='sfdgh'>
      <HeaderComp />
      <div className="admin-panel-container">
        <div className="admin-panel">
          <Typography variant="h4" component="h1" className="admin-title">
            🏎️ Панель администратора
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, flexWrap: 'wrap' }}>
            <Button
              onClick={handleOpenCreateModal}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Добавить модификацию
            </Button>
            <Button
              onClick={handleOpenUpdateModal}
              variant="contained"
              color="secondary"
              startIcon={<EditIcon />}
            >
              Изменить модификацию
            </Button>
            <Button
              onClick={() => handleOpenDeleteModal(123)}
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Удалить модификацию
            </Button>
            <Button
              onClick={handleGoToMainScreen}
              variant="outlined"
              color="success"
              startIcon={<HomeIcon />}
            >
              Главный экран
            </Button>
            <Button
              onClick={handleGoToUsersList}
              variant="outlined"
              color="info"
              startIcon={<PeopleIcon />}
            >
              Список пользователей
            </Button>
          </Box>
          <CreateProduct open={isCreateModalOpen} onClose={handleCloseCreateModal} />
          <DeleteServiceModal
            open={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            serviceId={selectedServiceId}
          />
          <UpdateProductModal open={isUpdateModalOpen} onClose={handleCloseUpdateModal} />
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}
