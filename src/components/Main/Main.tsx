import { useState } from 'react';
import InputFind from './InputFind/InputFind';
import ButtonOpen from '../buttons/ButtonOpen/ButtonOpen';
import Filters from './Filtes/Filters';
import Items from './Items/Items';
import Map from '../Map/Map';
import './Main.scss';

const Main = () => {
  const [open, setOpen] = useState(false);
  const handlerButton = () => {
    setOpen(!open);
  };

  return (
    <main className="main">
      <InputFind />
      <ButtonOpen open={open} handlerButton={handlerButton} />
      <div className="main__container">
        {open && <Filters />}
        <Items open={open} />
      </div>
      <Map />
    </main>
  );
};

export default Main;
