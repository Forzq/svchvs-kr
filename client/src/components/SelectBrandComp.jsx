import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../index';

export default function SelectBrandComp({ selectedBrand, setSelectedBrand }) { // Принимаем selectedBrand
  const { product } = useContext(Context);

  const handleChange = (event) => {
    setSelectedBrand(event.target.value); // Обновляем выбранный бренд
  };

  return useObserver(() => (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 , mb: 4}}>
      <Box sx={{ minWidth: 120, maxWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBrand}
            //  defaultValue={selectedBrand}// Устанавливаем текущее значение
            onChange={handleChange}
            label="Brand"
          >
            {product.carBrands.map((brand) => (
              <MenuItem key={brand.id} value={brand.name} > 
                {brand.name} {/* Текст, отображаемый в списке */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  ));
}
