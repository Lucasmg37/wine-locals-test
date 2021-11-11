import React from 'react';
import { Brand, ChevronLeft } from '../../assets/icons';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <button type="button">
      <ChevronLeft />
    </button>
    <Brand />
  </Container>
);

export default Header;
