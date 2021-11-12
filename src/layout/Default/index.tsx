import React from 'react';
import Header from '../../components/Header';

import background from '../../assets/images/background.png';

import { Container, Content } from './styles';
import useScroll from '../../hooks/useScroll';

interface DefaultLayoutProps {
  children: React.ReactNode;
  hasGoBack?: boolean;
}

const Default: React.FC<DefaultLayoutProps> = ({
  children,
  hasGoBack = true,
}: DefaultLayoutProps) => {
  const { top } = useScroll('defaultLayout');

  return (
    <Container id="defaultLayout">
      <img src={background} alt="" />
      <Content>
        <Header hasGoBack={hasGoBack} hasBackground={top > 10} />
        {children}
      </Content>
    </Container>
  );
};

export default Default;
