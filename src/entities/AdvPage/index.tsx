import React from 'react';
import style from './AdvPage.module.scss';

const AdvPage = () => {
  return (
    <div>
      <div className={style.advpage_header}>
        <div>
          <h1>Объявления</h1>
          <p>Всего: counter </p>
        </div>
        <button type="button">Добавить +</button>
      </div>
      <div>Search and ragination</div>
      <div>Tab</div>
    </div>
  );
};

export default AdvPage;
