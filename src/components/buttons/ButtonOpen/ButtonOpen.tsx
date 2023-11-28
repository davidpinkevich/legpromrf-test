import { Button } from '@mui/material';
import { FC } from 'react';
import { PropsButtonOpen } from '../../../types';
import './ButtonOpen.scss';

const ButtonOpen: FC<PropsButtonOpen> = ({ handlerButton, open }) => {
  return (
    <div className="main__button-filter">
      <Button onClick={handlerButton} variant="contained">
        {open ? 'Скрыть фильтры' : 'Открыть фильтры'}
      </Button>
    </div>
  );
};

export default ButtonOpen;
