import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Imges from '../../../../shared/Imges/Imges';
import style from './DropDownMenu.module.scss';

type Props = {
  label: ReactNode;
};

const DropDown = (props: Props) => {
  const { label } = props;
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
          <button
            type="button"
            className={style.DDMenu_item}
            onClick={() => navigate('edit_advertisement')}>
            <Imges imgName="EditLogo" />
            Редактировать
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
