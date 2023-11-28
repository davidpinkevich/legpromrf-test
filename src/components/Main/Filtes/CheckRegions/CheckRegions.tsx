import { Checkbox, FormControlLabel } from '@mui/material';
import './CheckRegions.scss';

const CheckRegions = () => {
  return (
    <div className="filters__regions">
      <h2 className="filters__regions-title">Регионы:</h2>
      <FormControlLabel control={<Checkbox />} label="Москва" />
      <FormControlLabel control={<Checkbox />} label="Санкт-Питербург" />
      <FormControlLabel control={<Checkbox />} label="Все регионы" />
    </div>
  );
};

export default CheckRegions;
