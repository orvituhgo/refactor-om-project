import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  warnColor,
  successColor,
} from '../configs/colors';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: #FFF;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        background-color: ${primaryColor};
    }

    ul {
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background-color: ${successColor};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background-color: ${errorColor};
        color: #fff;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--warn {
        background-color: ${warnColor};
        color: #fff;
    }

`;

export const Container = styled.section`
    max-width: 360px;
    background-color: #FFF;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
