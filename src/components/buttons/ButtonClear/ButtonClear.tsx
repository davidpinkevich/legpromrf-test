import { Button } from '@mui/material';

const ButtonClear = () => {
  return (
    <div className="filtes__button-clear" style={{ marginTop: '20px' }}>
      <Button fullWidth variant="contained" size="large">
        Сбросить все фильтры
      </Button>
    </div>
  );
};

export default ButtonClear;
