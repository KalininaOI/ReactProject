import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AdvPage from './entities/AdvPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<AdvPage />} />
        <Route path="advertisements" element={<AdvPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
