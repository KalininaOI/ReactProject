import React, { FC, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ItemCard from './ItemCard';
import style from '../../AdvPage.module.scss';
import Pagination from '../../../../shared/Pagination';
import Imges from '../../../../shared/Imges/Imges';
import { IItems } from '../../../../interfaces/IItems';
import { createItemAction } from '../../../../store/pages/AdvPage/actions';

interface IProps {
  itemCardAtr: IItems[];
}

const AdvPageComponent: FC<IProps> = ({ itemCardAtr }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [itemNameValue, setItemNameValue] = useState('');
  // const [categoryValue, setCategoryValue] = useState('');
  // const [dateValue, setDateValue] = useState('');
  // const [priceValue, setPriceValue] = useState('');

  const currentPageNumber = new URLSearchParams(search).get('page');

  const [value, setValue] = useState('');
  const filteredItems = itemCardAtr.filter((elem) => {
    return elem.itemname.toLowerCase().includes(value.toLowerCase());
  });

  const paginatedUserData = filteredItems.slice(
    (Number(currentPageNumber) - 1) * 8,
    Number(currentPageNumber) * 8
  );

  // const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const newItem = {
  //     id: filteredItems.length + 1,
  //     itemname: itemNameValue,
  //     category: categoryValue,
  //     date: dateValue,
  //     price: Number(priceValue),
  //   };
  //   dispatch(createItemAction(newItem));
  // };

  return (
    <>
      <div className={style.advpage_header}>
        <div>
          <h1>Объявления</h1>
          <div className={style.advpage_header_amount}>
            <p>Всего: {filteredItems.length} </p>
          </div>
        </div>
        <button type="button" onClick={() => navigate('create_new_advertisement')}>
          Добавить +
        </button>
      </div>
      <div className={style.advPage_search_pagination_block}>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Найти объявление"
            onChange={(event) => setValue(event.target.value)}
            className={style.search_input}
          />
          <Imges imgName="Search" />
        </div>
        <Pagination limit={8} itemsAmount={filteredItems.length} />
      </div>
      <div className={style.advPage_tab_header}>
        <div className={style.advPage_tab_header_name}>
          Название объекта
          <div className={style.advPage_tab_header_name_arr}>
            <Imges imgName="ArrUp" />
            <Imges imgName="ArrDown" />
          </div>
        </div>
        <div className={style.advPage_tab_header_cat}>Категория</div>
        <div className={style.advPage_tab_header_date}>Дата публикации</div>
        <div className={style.advPage_tab_header_publ}>Публикация</div>
      </div>
      <div>
        {paginatedUserData.length ? (
          paginatedUserData.map((item) => {
            const { id, itemname, category, date } = item;

            return (
              <React.Fragment key={`ItemId:${id}`}>
                <ItemCard itemname={itemname} category={category} date={date} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Объявлений нет</div>
        )}
      </div>

      {/* <form onSubmit={handleFormSubmit}>
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
      </form> */}
    </>
  );
};

export default AdvPageComponent;
