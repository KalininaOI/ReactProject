import React, { ReactNode, useState } from 'react';
import Imges from '../../../../shared/Imges/Imges';
import style from './DropDownMenu.module.scss';

type Props = {
  label: ReactNode;
};

const DropDown = (props: Props) => {
  const { label } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <button onClick={handleOpen} type="button" className={style.DDBtn}>
        <Imges imgName="DDBtn" />
        {label}
      </button>
      {isOpen && (
        <div className={style.DDMenu}>
          <div>Посмотреть</div>
          <div>Редактировать</div>
          <div>Удалить</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
