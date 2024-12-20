import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Context } from '../index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteServiceModal({ open, onClose }) {
  const { product } = useContext(Context);
  const [selectedProductId, setSelectedProductId] = useState('');

  const handleChange = (e) => {
    setSelectedProductId(e.target.value);
  };

  const handleDelete = async () => {
    if (!selectedProductId) {
      alert('Выберите продукт для удаления.');
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/products/${selectedProductId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Продукт успешно удален!');
        onClose(); // Закрыть модальное окно после удаления
      } else {
        const errorText = await response.text(); // Читаем текст ответа
        console.error('Ошибка:', errorText);
        alert(`Ошибка удаления: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось удалить продукт. Проверьте подключение.');
    }
  };
  

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-delete-title"
      aria-describedby="modal-delete-description"
    >
      <Box sx={style}>
        <Typography id="modal-delete-title" variant="h6" component="h2">
          Удаление продукта
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <select
            value={selectedProductId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите продукт</option>
            {product.products.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.name} - {prod.description}
              </option>
            ))}
          </select>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button onClick={handleDelete} variant="contained" color="error">
              Удалить
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Отмена
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
