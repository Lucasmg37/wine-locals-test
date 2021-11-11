import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Plus } from '../../assets/icons';
import MenuItem from '../../components/MenuItem';
import useScroll from '../../hooks/useScroll';
import Default from '../../layout/Default';
import IPlaces from '../../models/IPlaces';
import PlaceGetOneAdapter from '../../services/DataMananger/Adapters/PlaceGetOne';
import PlaceGetOne from '../../services/Place/GetOne';
import { getPlatesExtensionNumber } from '../../utils/getStrings';

import { Container, FloatButton } from './styles';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [place, setPlace] = useState<IPlaces>({} as IPlaces);

  const { goToTop } = useScroll();

  useEffect(() => {
    goToTop();

    if (id) {
      const adapter = new PlaceGetOneAdapter<IPlaces>();
      const placeServices = new PlaceGetOne(adapter);
      const data = placeServices.getOne(+id);
      setPlace(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleGoAddItem = useCallback(() => {
    navigate(`/menu/${id}/new-plate`);
  }, [id, navigate]);

  return (
    <Default>
      <Container>
        <h1>{place.name}</h1>
        <p>{getPlatesExtensionNumber(place)}</p>
        <ul>
          {place.menuItems &&
            place.menuItems.map((itemMenu, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <MenuItem menuItem={itemMenu} />
              </li>
            ))}
        </ul>

        <FloatButton
          aria-label="Adicionar novo prato"
          onClick={handleGoAddItem}
          type="button"
        >
          <Plus />
        </FloatButton>
      </Container>
    </Default>
  );
};

export default Menu;
