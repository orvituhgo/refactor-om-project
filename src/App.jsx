import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar/index';
import AllRoutes from './configs/AllRoutes';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <Router>
      <NavBar />
      <AllRoutes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}
