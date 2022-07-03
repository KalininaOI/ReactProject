import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Imges from '../../shared/Imges/Imges';
import { createItemAction } from '../../store/pages/AdvPage/actions';
import { getItemsData } from '../../store/pages/AdvPage/selectors';
import style from './CreateAdvPage.module.scss';

const CreateAdvPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [itemNameValue, setItemNameValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [priceValue, setPriceValue] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem = {
      id: 30,
      itemname: itemNameValue,
      category: categoryValue,
      date: dateValue,
      price: Number(priceValue),
    };
    dispatch(createItemAction(newItem));
  };

  return (
    <>
      <div className={style.CAD_header_back}>
        <button type="button" onClick={() => navigate(-1)} className={style.CAD_header_back_btn}>
          {' '}
          <Imges imgName="BackToAdv" />
        </button>
      </div>
      <div>New Adv</div>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="itemName"
          value={itemNameValue}
          onChange={(event) => setItemNameValue(event.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={categoryValue}
          onChange={(event) => setCategoryValue(event.target.value)}
        />
        <input
          type="text"
          placeholder="date"
          value={dateValue}
          onChange={(event) => setDateValue(event.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value={priceValue}
          onChange={(event) => setPriceValue(event.target.value)}
        />
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default CreateAdvPage;
