import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AdvPage from './entities/AdvPage';
import EditAdvPage from './entities/EditAdvPage';
import CreateAdvPage from './entities/CreateAdvPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<AdvPage />} />
        <Route path="advertisements" element={<AdvPage />} />
        <Route path="advertisements/create_new_advertisement" element={<CreateAdvPage />} />
        {/* <Route path="advertisements/edit_advertisement/:id" element={<EditAdvPage />} /> */}
      </Routes>
    </PageLayout>
  );
};

export default App;
