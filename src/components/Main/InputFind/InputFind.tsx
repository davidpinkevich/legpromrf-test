import { Button, TextField } from '@mui/material';
import './InputFind.scss';

const InputFind = () => {
  return (
    <div className="main__input">
      <TextField fullWidth label="Быстрый поиск" variant="outlined" />
      <Button size="large" variant="contained">
        Найти
      </Button>
    </div>
  );
};

export default InputFind;
