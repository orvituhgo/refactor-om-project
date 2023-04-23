/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Nav from './styled';

export default function NavBar() {
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
    </Nav>
  );
}
