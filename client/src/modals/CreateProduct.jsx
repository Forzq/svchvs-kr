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

export default function CreateProduct({ open, onClose }) {
  const { product } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    horsepowerGain: '',
    torqueGain: '',
    description: '',
    cost: '',
    CarModelId: '',
    TypeOfProductId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Преобразуем значения для отправки
    const dataToSend = {
      name: formData.name,
      horsepowerGain: parseInt(formData.horsepowerGain, 10),
      torqueGain: parseInt(formData.torqueGain, 10),
      description: formData.description,
      cost: parseFloat(formData.cost),
      CarModelId: parseInt(formData.CarModelId, 10),
      TypeOfProductId: parseInt(formData.TypeOfProductId, 10),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Продукт успешно добавлен!');
        console.log(data);
        onClose(); // Закрыть модалку после успешного добавления
      } else {
        const errorData = await response.json();
        alert(`Ошибка: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось добавить продукт.');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Добавление новой модификации
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <select
            name="CarModelId"
            value={formData.CarModelId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите модель</option>
            {product.carModels.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>

          <select
            name="TypeOfProductId"
            value={formData.TypeOfProductId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите тип</option>
            {product.types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="name"
            placeholder="Введите название"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="horsepowerGain"
            placeholder="Введите прирост л.с."
            value={formData.horsepowerGain}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="torqueGain"
            placeholder="Введите прирост крутящего момента"
            value={formData.torqueGain}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cost"
            placeholder="Введите цену"
            value={formData.cost}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Введите описание"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Сохранить
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Закрыть
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
