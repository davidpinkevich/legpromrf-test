import Item from '../Item/Item';
import { COMPAINES } from '../../../constants';
import './Items.scss';

const Items = () => {
  return (
    <div className="main__items">
      {COMPAINES.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
