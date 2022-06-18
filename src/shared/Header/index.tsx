import React from 'react';
import style from './Header.module.scss';
import Imges from '../Imges/Imges';

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.page_header__container}>
        <div>
          <Imges imgName="Logo" />
        </div>
        <div className={style.page_header__profile}>
          <Imges imgName="ProfileLogo" />
          Профиль
        </div>
      </div>
    </div>
  );
};

export default Header;
