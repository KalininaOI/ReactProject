import React, { ReactNode, useState } from 'react';

type Props = {
  label: ReactNode;
};

const DropDown = (props: Props) => {
  const { label } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <button onClick={handleOpen} type="button">
        {label}
      </button>
      {isOpen && (
        <div>
          <div>Посмотреть</div>
          <div>Редактировать</div>
          <div>Удалить</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
