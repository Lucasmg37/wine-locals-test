import React from 'react';
import { Plus } from '../../assets/icons';
import IPlaces from '../../models/IPlaces';
import { getPlatesExtensionNumber } from '../../utils/getStrings';

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
      <p>{getPlatesExtensionNumber(placeData)}</p>
    </button>
    <button onClick={onPlusClick} type="button">
      <Plus />
    </button>
  </Container>
);

export default PlaceItem;
