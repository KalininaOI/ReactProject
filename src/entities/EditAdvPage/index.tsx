import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
  id: number;
  itemName: string;
}

const EditAdvPage: FC<IProps> = ({ id, itemName }) => {
  // const { id } = useParams();

  return (
    <div>
      {id}Edit Adv {itemName}
    </div>
  );
};

export default EditAdvPage;
