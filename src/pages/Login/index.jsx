import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
      </Title>
      <Paragrafo>Lorem ipsum dolor it. Hic ullam quidem ex eum animi consequatur!</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
