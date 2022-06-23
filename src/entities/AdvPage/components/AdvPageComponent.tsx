import React, { FC } from 'react';
import { IItems } from '../../../interfaces/IItems';
import ItemCard from './ItemCard';
import style from '../AdvPage.module.scss';

interface IProps {
  itemCardAtr: IItems[];
}

const AdvPageComponent: FC<IProps> = ({ itemCardAtr }) => {
  return (
    <div>
      {itemCardAtr.length ? (
        itemCardAtr.map((item) => {
          const { id, itemname, category, date, publishing } = item;
          return (
            <React.Fragment key={`ItemId:${id}`}>
              <ItemCard
                itemname={itemname}
                category={category}
                date={date}
                publishing={publishing}
              />
            </React.Fragment>
          );
        })
      ) : (
        <div>Объявлений нет</div>
      )}
    </div>
  );
};

export default AdvPageComponent;
