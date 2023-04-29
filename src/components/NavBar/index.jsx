import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Nav from './styled';

export default function NavBar() {
  const isLogged = useSelector((state) => state.isLogged.isLoggedIn);

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/"><FaHome size={24} /></Link>
        </li>
        <li>
          <Link to="/user"><FaUserAlt size={24} /></Link>
        </li>
        <li>
          <Link to="/logout"><FaSignInAlt size={24} /></Link>
        </li>
      </ul>
      {isLogged ? <p>Logado</p> : <p>Você não está logado</p>}
    </Nav>
  );
}
