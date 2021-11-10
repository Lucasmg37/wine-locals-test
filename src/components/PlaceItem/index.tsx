import React from 'react';
import { Plus } from '../../assets/icons';

import { Container } from './styles';

const PlaceItem: React.FC = () => (
  <Container>
    <div>
      <h2>Silva</h2>
      <p>23 pratos</p>
    </div>
    <button type="button">
      <Plus />
    </button>
  </Container>
);

export default PlaceItem;
