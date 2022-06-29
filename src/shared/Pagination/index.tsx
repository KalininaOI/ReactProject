import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Imges from '../Imges/Imges';
import style from './Pagination.module.scss';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);

  const pagesArray: number[] = [];

  const { search } = useLocation();

  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i += 1) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((page) => {
        if (
          page === pagesArray[pagesArray.length - 1] &&
          search.includes(`?page=${pagesArray.length}`)
        ) {
          return (
            <div>
              {`${(page - 1) * limit + 1} - ${itemsAmount} из ${itemsAmount}`}
              <button
                type="button"
                className={style.pagination_buttons}
                onClick={() => navigate(`?page=${page - 1}`)}>
                <Imges imgName="BtnArrBack" />
              </button>
              <button type="button" className={style.pagination_buttons}>
                <Imges imgName="BtnArrForward" />
              </button>
            </div>
          );
        }
        if (
          page === pagesArray[pagesArray.length - 1] &&
          !search.includes(`?page=${pagesArray.length}`)
        ) {
          return '';
        }
        if (!search.includes(`?page=${page}`)) {
          return '';
        }

        return (
          <div>
            {`${(page - 1) * limit + 1} - ${page * limit} из ${itemsAmount}`}
            <button
              type="button"
              className={style.pagination_buttons}
              onClick={() => navigate(`?page=${page - 1}`)}>
              <Imges imgName="BtnArrBack" />
            </button>
            <button
              type="button"
              className={style.pagination_buttons}
              onClick={() => navigate(`?page=${page + 1}`)}>
              <Imges imgName="BtnArrForward" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
