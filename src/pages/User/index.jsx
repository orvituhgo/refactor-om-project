import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function User() {
  return (
    <Container>
      <Title>
        User
      </Title>
      <Paragrafo>Lorem ipsum dolor sit.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
