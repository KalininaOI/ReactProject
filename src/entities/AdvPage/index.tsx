import React from 'react';
import { mockedItems } from '../../mocks/mockedItems';
import AdvPageComponent from './components/AdvPageItems/AdvPageComponent';

const AdvPage = () => {
  return <AdvPageComponent itemCardAtr={mockedItems} />;
};

export default AdvPage;
