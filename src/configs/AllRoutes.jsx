import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/index';
import User from '../pages/User/index';
import Logout from '../pages/Logout/index';
import Page404 from '../pages/Page404/index';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/user"
        element={(
          <PrivateRoute>
            <User isClosed />
          </PrivateRoute>
      )}
      />
      <Route
        path="/Logout"
        element={(
          <PrivateRoute>
            <Logout isClosed />
          </PrivateRoute>
      )}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
