import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from '../../assets/icons';
import MenuItem from '../../components/MenuItem';
import Default from '../../layout/Default';

import { Container, FloatButton } from './styles';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleGoAddItem = useCallback(() => {
    navigate('/menu/bla/new-plate');
  }, [navigate]);

  return (
    <Default>
      <Container>
        <h1>Silva Lanches</h1>
        <p>23 pratos</p>
        <ul>
          {[...Array(20).keys()].map(() => (
            <li>
              <MenuItem />
            </li>
          ))}
        </ul>

        <FloatButton onClick={handleGoAddItem} type="button">
          <Plus />
        </FloatButton>
      </Container>
    </Default>
  );
};

export default Menu;
