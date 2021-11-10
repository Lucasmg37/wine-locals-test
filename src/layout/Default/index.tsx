import React from 'react';
import Header from '../../components/Header';

import background from '../../assets/images/background.png';

import { Container, Content } from './styles';

const Default: React.FC = ({ children }) => (
  <Container>
    <img src={background} alt="" />
    <Content>
      <Header />
      {children}
    </Content>
  </Container>
);

export default Default;
