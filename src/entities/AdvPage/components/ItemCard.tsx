import React, { FC } from 'react';
import style from '../AdvPage.module.scss';

interface IProps {
  itemname: string;
  category: string;
  date: string;
  publishing: boolean;
}

const ItemCard: FC<IProps> = ({ itemname, category, date, publishing }) => {
  return (
    <div className={style.advpagecom_block}>
      <div className={style.advpagecom_block_itemname}>{itemname}</div>
      <div className={style.advpagecom_block_itemcat}>{category}</div>
      <div className={style.advpagecom_block_itemdate}>{date}</div>
      <div>{publishing}</div>
    </div>
  );
};

export default ItemCard;
