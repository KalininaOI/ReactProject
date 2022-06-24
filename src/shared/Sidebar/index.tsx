import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Imges from '../Imges/Imges';
import style from './Sidebar.module.scss';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.sidebar_menu}>
      <div className={`${style.sidebar_menu__acc} ${style.sidebar_menu__block}`}>
        <div className={style.sidebar_menu__acc_alogo}>
          {' '}
          <Imges imgName="ALogo" />
        </div>
        <div>
          <ul className={style.sidebar_menu__acc_adm}>
            {' '}
            <li className={style.sidebar_menu__acc_adm_name}>Super admin</li>
            <li className={style.sidebar_menu__acc_adm_desc}>Админ-меню</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={style.sidebar_menu__pages}>
          {sidebarConfig.map((menuPage) => {
            const isActiveClassname = pathname.includes(menuPage.path) ? style.active : '';
            return (
              <Link key={menuPage.id} to={menuPage.path} className={isActiveClassname}>
                <div className={style.sidebar_menu__pages_list}>
                  <Imges imgName="AdvLogo" />
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={`${style.sidebar_menu__exit} ${style.sidebar_menu__block}`}>
        {' '}
        <Imges imgName="ExitLogo" />
      </div>
    </div>
  );
};

export default Sidebar;
