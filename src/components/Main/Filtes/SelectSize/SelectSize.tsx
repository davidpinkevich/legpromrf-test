import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const SelectSize = () => {
  const [age, setAge] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Размер компании</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Размер компании"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={'1'}>Стартап</MenuItem>
        <MenuItem value={'2'}>Малый бизнес</MenuItem>
        <MenuItem value={'3'}>Среднее предприятие</MenuItem>
        <MenuItem value={'4'}>Крупная корпорация</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSize;
