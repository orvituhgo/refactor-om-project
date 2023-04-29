import styled from 'styled-components';
import { primaryColor } from '../../configs/colors';

const nav = styled.nav`
  ul {
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  }

  a, p {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
  `;

export default nav;
