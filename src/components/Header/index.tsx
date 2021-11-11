import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brand, ChevronLeft } from '../../assets/icons';

import { Container } from './styles';

interface HeaderProps {
  hasGoBack?: boolean;
  hasBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  hasGoBack = true,
  hasBackground = false,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container hasBackground={hasBackground}>
      {hasGoBack && (
        <button onClick={handleGoBack} type="button">
          <ChevronLeft />
        </button>
      )}
      <Brand />
    </Container>
  );
};

export default Header;
