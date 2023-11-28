import { FC } from 'react';
import Item from '../Item/Item';
import { COMPAINES } from '../../../constants';
import './Items.scss';

const Items: FC<{ open: boolean }> = ({ open }) => {
  return (
    <div className={open ? 'main__items items__open' : 'main__items'}>
      {COMPAINES.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
