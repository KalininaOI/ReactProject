import React, { FC, ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IItems } from '../../../../interfaces/IItems';
import Imges from '../../../../shared/Imges/Imges';
import style from './DropDownMenu.module.scss';

type IProps = {
  label: ReactNode;
  id: number;
};

const DropDown: FC<IProps> = ({ id, label }) => {
  const navigate = useNavigate();
  const [Open, setOpen] = useState<boolean>(false);
  // const close = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <button onClick={handleOpen} type="button" className={style.DDBtn}>
        <Imges imgName="DDBtn" />
        {label}
      </button>
      {Open && (
        <div className={style.DDMenu}>
          <button type="button" className={style.DDMenu_item}>
            <Imges imgName="ShowLogo" />
            Посмотреть
          </button>
          <button type="button" className={style.DDMenu_item}>
            <Imges imgName="EditLogo" />
            <Link to={`edit_advertisement/${id}`}>Подробная информация</Link>
          </button>
          <button type="button" className={style.DDMenu_item_delete}>
            <Imges imgName="DeleteLogo" />
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
