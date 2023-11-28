import { Checkbox, FormControlLabel } from '@mui/material';
import './CheckEmployment.scss';

const CheckEmployment = () => {
  return (
    <div className="filters__employment">
      <h2 className="filters__employment-title">Тип занятости:</h2>
      <FormControlLabel control={<Checkbox />} label="Полная занятость" />
      <FormControlLabel control={<Checkbox />} label="Частичная занятость" />
      <FormControlLabel control={<Checkbox />} label="Проектная работа" />
      <FormControlLabel control={<Checkbox />} label="Стажировка" />
    </div>
  );
};

export default CheckEmployment;
