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

export default function UpdateProductModal({ open, onClose }) {
  const { product } = useContext(Context);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    horsepowerGain: '',
    torqueGain: '',
    description: '',
    cost: '',
    CarModelId: '',
    TypeOfProductId: '',
  });

  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProductId(productId);

    const selectedProduct = product.products.find((prod) => prod.id === parseInt(productId));
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        horsepowerGain: selectedProduct.horsepowerGain,
        torqueGain: selectedProduct.torqueGain,
        description: selectedProduct.description,
        cost: selectedProduct.cost,
        CarModelId: selectedProduct.CarModelId,
        TypeOfProductId: selectedProduct.TypeOfProductId,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!selectedProductId) {
      alert('Выберите продукт для изменения.');
      return;
    }

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
        const response = await fetch(`http://localhost:5000/api/products/${selectedProductId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
        });
      
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Ошибка от сервера:', errorText);
          alert('Произошла ошибка: ' + errorText);
          return;
        }
      
        const responseData = await response.json();
        alert('Продукт успешно обновлен!');
        onClose();
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Не удалось обновить продукт.');
      }};

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-update-title"
      aria-describedby="modal-update-description"
    >
      <Box sx={style}>
        <Typography id="modal-update-title" variant="h6" component="h2">
          Изменение продукта
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <select
            value={selectedProductId}
            onChange={handleProductSelect}
            required
          >
            <option value="">Выберите продукт</option>
            {product.products.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.name} - {prod.description}
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

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button onClick={handleUpdate} variant="contained" color="primary">
              Сохранить изменения
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
