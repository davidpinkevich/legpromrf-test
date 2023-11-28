import { FC } from 'react';
import ButtonsItem from '../../buttons/ButtonsItem/ButtonsItem';
import { ICompanies } from '../../../types';
import './Item.scss';

const Item: FC<ICompanies> = ({ name, img, start, info, current }) => {
  return (
    <div className="main__items-item item">
      <div className="item__img">
        <img src={img} alt={name} />
      </div>
      <div className="item__body">
        <h2 className="item__body-title">
          {name} (с {start} года)
        </h2>
        <p className="item__body-info">{info}</p>
        <p className="item__body-current">
          Кол-во сотрудников: <span>{current}</span>
        </p>

        <ButtonsItem />
      </div>
    </div>
  );
};

export default Item;
