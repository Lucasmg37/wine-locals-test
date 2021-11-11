import React from 'react';
import { Plus } from '../../assets/icons';
import IPlaces from '../../models/IPlaces';

import { Container } from './styles';

interface PlaceItemProps {
  placeData: IPlaces;
  onPlusClick: () => void;
  onCardClick: () => void;
}

const PlaceItem: React.FC<PlaceItemProps> = ({
  placeData,
  onPlusClick,
  onCardClick,
}: PlaceItemProps) => (
  <Container>
    <button type="button" onClick={onCardClick}>
      <h2>{placeData.name}</h2>
      <p>
        {placeData.menuItems.length > 1 &&
          `${placeData.menuItems.length} pratos`}
        {placeData.menuItems.length === 1 && `1 prato`}
        {placeData.menuItems.length < 1 && `Sem pratos`}
      </p>
    </button>
    <button onClick={onPlusClick} type="button">
      <Plus />
    </button>
  </Container>
);

export default PlaceItem;
