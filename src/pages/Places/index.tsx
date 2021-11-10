import React from 'react';
import PlaceItem from '../../components/PlaceItem';
import Default from '../../layout/Default';

import { Container } from './styles';

const Places: React.FC = () => (
  <Default>
    <Container>
      <h1>Lugares</h1>
      <p>6 lugares cadastrados</p>
      <ul>
        {[...Array(20).keys()].map(() => (
          <li>
            <PlaceItem />
          </li>
        ))}
      </ul>
    </Container>
  </Default>
);

export default Places;
