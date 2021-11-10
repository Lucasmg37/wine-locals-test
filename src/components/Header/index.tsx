import React from 'react';
import { Brand } from '../../assets/icons';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <button type="button"> Voltar</button> <Brand />
  </Container>
);

export default Header;
