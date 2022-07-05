import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getItemsData } from '../../store/pages/AdvPage/selectors';
import AdvPageComponent from './components/AdvPageItems/AdvPageComponent';

const AdvPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const itemsData = useSelector(getItemsData);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/advertisements');
    }
    if (search.includes('?page=0')) {
      navigate('?page=1');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

  return <AdvPageComponent itemCardAtr={itemsData} />;
};

export default AdvPage;
