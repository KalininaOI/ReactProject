import React, { FC } from 'react';

interface IProps {
  itemname: string;
  category: string;
  date: string;
  publishing: boolean;
}

const ItemCard: FC<IProps> = ({ itemname, category, date, publishing }) => {
  return (
    <div>
      <div>{itemname}</div>
      <div>{category}</div>
      <div>{date}</div>
      <div>{publishing}</div>
    </div>
  );
};

export default ItemCard;
