import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { loginRequest } from '../../redux/slices/login/login-slice';
// import {
//   loginSuccess, loginFailure,
//   getIsLoggedError, getIsLoggedStatus, getIsLoggedValue,
// } from '../../redux/slices/login/login-slice';

export default function Login() {
  // const isLoggedIn = useSelector(getIsLoggedValue);
  // const isLoggedInStatus = useSelector(getIsLoggedStatus);
  // const isLoggedInError = useSelector(getIsLoggedError);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loginRequest());
  }

  return (
    <Container>
      <Title>
        Login
      </Title>
      <Paragrafo>Lorem ipsum dolor it. Hic ullam quidem ex eum animi consequatur!</Paragrafo>
      <button type="button">show state</button>
      <button onClick={handleClick} type="button">toggle state</button>
    </Container>
  );
}
