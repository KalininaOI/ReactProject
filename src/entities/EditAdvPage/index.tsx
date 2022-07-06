import React from 'react';
import { useParams } from 'react-router-dom';

const EditAdvPage = () => {
  const { id } = useParams();

  return <div>{id}Edit Adv</div>;
};

export default EditAdvPage;
