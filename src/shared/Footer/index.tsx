import React from 'react';
import Imges from '../Imges/Imges';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div className={style.page_footer__board__container}>
        <div className={style.page_footer__board}>
          <Imges imgName="Logo" />
          <div className={style.page_footer__board__text}>Доска объявлений</div>
        </div>
        <div>© ООО «Доска диджитал», 2022</div>
      </div>
    </div>
  );
};

export default Footer;
