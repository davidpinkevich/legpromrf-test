import { TextField } from '@mui/material';
import './InputSalary.scss';

const InputSalary = () => {
  return (
    <div className="filters__salary">
      <h2 className="filters__salary-title">Уровень дохода:</h2>
      <div className="filters__salary-body">
        <TextField fullWidth type="number" label="От" variant="outlined" />
        <TextField fullWidth type="number" label="До" variant="outlined" />
      </div>
    </div>
  );
};

export default InputSalary;
