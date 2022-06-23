import React from 'react';
import { mockedItems } from '../../mocks/mockedItems';
import Imges from '../../shared/Imges/Imges';
import style from './AdvPage.module.scss';
import AdvPageComponent from './components/AdvPageComponent';

const AdvPage = () => {
  // const [itemData, setItemData] = useState<IItems[] | null>(null);

  // useEffect(() => {
  //   setItemData(mockedItems);
  // }, []);

  return (
    <div>
      <div className={style.advpage_header}>
        <div>
          <h1>Объявления</h1>
          <p>Всего: counter </p>
        </div>
        <button type="button">Добавить +</button>
      </div>
      <div className={style.advPage_search_pagination_block}>Search and pagination</div>
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
      <AdvPageComponent itemCardAtr={mockedItems} />
    </div>
  );
};

export default AdvPage;
