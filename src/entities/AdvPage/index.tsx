import React from 'react';
import { mockedItems } from '../../mocks/mockedItems';
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
      <div>Search and pagination</div>
      <div>Tab</div>
      <AdvPageComponent itemCardAtr={mockedItems} />
    </div>
  );
};

export default AdvPage;
