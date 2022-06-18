import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import AdvPage from './entities/AdvPage';
import PageLayout from './layouts/PageLayout';
// import PageLayout from './layouts/PageLayout';
// import ItemsPage from './entities/ItemsPage';
// import PageLayout from './layouts/PageLayout';
// import PageLayout from './layouts/PageLayout';
// import TestPage from './entities/TestPage';
// import UsersPage from './entities/UsersPage';
// import UserComponent from './entities/UsersPage/components/UserComponent';
// import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <AdvPage />
    </PageLayout>
    // <PageLayout>
    //   <Routes>
    //     <Route path="/" element={<ItemsPage />} />
    //     {/* <Route path="users_page" element={<UsersPage />} />
    //     <Route path="users_page/:id" element={<UserComponent />} />
    //     <Route path="test_page" element={<TestPage />} /> */}
    //   </Routes>
    // </PageLayout>
  );
};

export default App;
