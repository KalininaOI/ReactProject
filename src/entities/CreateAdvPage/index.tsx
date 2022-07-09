import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Imges from '../../shared/Imges/Imges';
import { createItemAction } from '../../store/pages/AdvPage/actions';
import style from './CreateAdvPage.module.scss';

const CreateAdvPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [itemNameValue, setItemNameValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState(''); // data!
  const [priceValue, setPriceValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [discribeValue, setDiscribeValue] = useState('');
  const [photoValue, setPhotoValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

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
      <form onSubmit={handleFormSubmit}>
        <div className={style.CAD_header_item}>
          <div className={style.CAD_header_item_name}>{itemNameValue}</div>
          <button type="submit">Сохранить</button>
        </div>
        <div className={style.CAD_body}>
          <div>
            <h2>Название товара</h2>
            <input
              type="text"
              className={`${style.CAD_input_wide} ${style.CAD_input}`}
              placeholder="Введите название товара"
              value={itemNameValue}
              onChange={(event) => setItemNameValue(event.target.value)}
            />
          </div>
          <div className={style.CAD_body_category_price}>
            <div>
              <h2>Категория</h2>
              <select
                value={categoryValue}
                onChange={(event) => setCategoryValue(event.target.value)}
                className={style.CAD_select}>
                <option value="игрушки">игрушки</option>
                <option value="одежда">одежда</option>
                <option value="посуда">посуда</option>
                <option value="животные">животные</option>
              </select>
            </div>
            <div>
              <h2>Стоимость</h2>
              <input
                type="number"
                className={style.CAD_input}
                placeholder="price"
                value={priceValue}
                onChange={(event) => setPriceValue(event.target.value)}
              />
            </div>
          </div>
          <h2>Телефон</h2>
          <input
            type="tel"
            className={style.CAD_input}
            maxLength={10}
            minLength={10}
            pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
            placeholder="+7(___)___-__-__"
            value={telValue}
            onChange={(event) => setTelValue(event.target.value)}
          />
          <div>
            <h2>Описание</h2>
            <input
              type="text"
              className={`${style.CAD_input_big} ${style.CAD_input}`}
              placeholder="Введите текст (до 3000 символов)"
              maxLength={3000}
              value={discribeValue}
              onChange={(event) => setDiscribeValue(event.target.value)}
            />
          </div>
          <div>
            <h2>Фотография</h2>
            <input
              type="file"
              className={`${style.CAD_input_wide} ${style.CAD_input}`}
              value={photoValue}
              onChange={(event) => setPhotoValue(event.target.value)}
            />
          </div>
          <div>
            <h2>Местоположение</h2>
            <input
              type="text"
              className={`${style.CAD_input_wide} ${style.CAD_input}`}
              placeholder="Введите адрес"
              value={locationValue}
              onChange={(event) => setLocationValue(event.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAdvPage;
