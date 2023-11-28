import { Button } from '@mui/material';
import './ButtonsItem.scss';

const ButtonsItem = () => {
  return (
    <div className="item__body-buttons">
      <Button variant="contained">Открыть</Button>
      <Button variant="contained">Добавить в избранное</Button>
    </div>
  );
};
export default ButtonsItem;
