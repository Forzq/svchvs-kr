import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../index';

export default function SelectBrandComp() {
  const [selectedBrand, setSelectedBrand] = useState(''); // Хранение выбранного бренда
  const { product } = useContext(Context);

  const handleChange = (event) => {
    setSelectedBrand(event.target.value); // Обновление выбранного бренда
  };

  return useObserver(() => (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <Box sx={{ minWidth: 120, maxWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBrand} // Установка текущего значения
            onChange={handleChange}
            label="Brand"
          >
            {product.brands.map((model) => (
              <MenuItem key={model.id} value={model.name}> {/* Установите значение для модели */}
                {model.name} {/* Текст, отображаемый в списке */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  ));
}
