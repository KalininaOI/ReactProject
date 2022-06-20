import React from 'react';
import Imges from '../Imges/Imges';
// import { Link, useLocation } from 'react-router-dom';
// import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';

const Sidebar = () => {
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
      <div className={`${style.sidebar_menu__pages} ${style.sidebar_menu__block}`}>
        {' '}
        <Imges imgName="AdvLogo" />
      </div>
      <div className={`${style.sidebar_menu__exit} ${style.sidebar_menu__block}`}>
        {' '}
        <Imges imgName="ExitLogo" />
      </div>
    </div>
  );
  // const { pathname } = useLocation();

  // return (
  //   <div className={style.sidebar_wrapper}>
  //     <ul className={style.sidebar_menu}>
  //       {sidebarConfig.map((menuItem) => {
  //         const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
  //         return (
  //           <Link
  //             key={menuItem.id}
  //             to={menuItem.path}
  //             className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
  //             <li>{menuItem.name}</li>
  //           </Link>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
};

export default Sidebar;
