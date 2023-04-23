import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/index";
import Login from './pages/Login/index'
import User from './pages/User/index'
import Logout from './pages/Logout/index'
import Page404 from './pages/Page404/index'
import PrivateRoute from "./configs/PrivateRoute";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return(
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={
        <PrivateRoute isClosed>
          <User />
        </PrivateRoute>} />
        <Route path="/Logout" element={
        <PrivateRoute isClosed>
          <Logout />
        </PrivateRoute>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <GlobalStyles/>
    </Router>
    
  )
}