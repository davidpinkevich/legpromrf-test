import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './SelectTime.scss';

const SelectTime = () => {
  const [time, setTime] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };
  return (
    <div className="filters__time">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Время размещения вакансии</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Время размещения вакансии"
          value={time}
          onChange={handleChange}
        >
          <MenuItem value={'1'}>За всё время</MenuItem>
          <MenuItem value={'2'}>За месяц</MenuItem>
          <MenuItem value={'3'}>За неделю</MenuItem>
          <MenuItem value={'4'}>За сутки</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectTime;
