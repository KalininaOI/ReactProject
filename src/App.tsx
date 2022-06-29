import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AdvPage from './entities/AdvPage';
import CreateAdvPage from './entities/CreateAdvPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<AdvPage />} />
        <Route path="advertisements" element={<AdvPage />} />
        <Route path="advertisements/create_new_advertisement" element={<CreateAdvPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
