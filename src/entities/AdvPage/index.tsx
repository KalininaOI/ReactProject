import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedItems } from '../../mocks/mockedItems';
import { setItemsDataAction } from '../../store/pages/AdvPage/actions';
import { getItemsData } from '../../store/pages/AdvPage/selectors';
import AdvPageComponent from './components/AdvPageItems/AdvPageComponent';

const AdvPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsData = useSelector(getItemsData);
  const setItems = setItemsDataAction(mockedItems);

  useEffect(() => {
    dispatch(setItems);
  }, []);

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
