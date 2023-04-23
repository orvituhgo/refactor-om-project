import styled from 'styled-components';

export const Title = styled.h1`

  background-color: ${(props) => (props.isRed ? 'red' : 'tomato')};

  h2 {
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #999
  }
`;

export const Paragrafo = styled.p`
    color: aliceblue;
`;
