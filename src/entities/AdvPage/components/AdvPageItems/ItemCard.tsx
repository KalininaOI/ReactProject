import React, { FC } from 'react';
import DropDown from '../DropDownMenu/DropDownMenu';
import style from './ItemCard.module.scss';

interface IProps {
  id: number;
  itemname: string;
  category: string;
  date: string;
}

const ItemCard: FC<IProps> = ({ id, itemname, category, date }) => {
  return (
    <div className={style.advpagecom_block}>
      <div className={style.advpagecom_block_itemname}>{itemname}</div>
      <div className={style.advpagecom_block_itemcat}>{category}</div>
      <div className={style.advpagecom_block_itemdate}>{date}</div>
      <div className={style.advpagecom_block_itempubl}>Да</div>
      <DropDown label={undefined} id={id} itemName={itemname} />
    </div>
  );
};

export default ItemCard;
