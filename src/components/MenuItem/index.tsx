import React from 'react';
import IMenuItem from '../../models/IMenuItem';
import { getFormattedPrice } from '../../utils/price';

import { Container } from './styles';

interface MenuItemProps {
  menuItem: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem }: MenuItemProps) => (
  <Container>
    <div>
      <h2>{menuItem.name}</h2> <h3>{getFormattedPrice(menuItem.price)}</h3>
    </div>
    <p>{menuItem.description}</p>
  </Container>
);

export default MenuItem;
