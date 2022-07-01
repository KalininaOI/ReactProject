import React from 'react';
import { useNavigate } from 'react-router-dom';
import Imges from '../../shared/Imges/Imges';
import style from './CreateAdvPage.module.scss';

const CreateAdvPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.CAD_header_back}>
        <button type="button" onClick={() => navigate(-1)} className={style.CAD_header_back_btn}>
          {' '}
          <Imges imgName="BackToAdv" />
        </button>
      </div>
      <div>New Adv</div>
    </>
  );
};

export default CreateAdvPage;
