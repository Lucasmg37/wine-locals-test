import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceItem from '../../components/PlaceItem';
import useScroll from '../../hooks/useScroll';
import Default from '../../layout/Default';
import IPlaces from '../../models/IPlaces';
import PlaceGetAllAdapter from '../../services/DataMananger/Adapters/PlaceGetAll';
import PlaceGetAll from '../../services/Place/GetAll';
import { getPlacesExtensionNumber } from '../../utils/getStrings';

import { Container } from './styles';

const Places: React.FC = () => {
  const [places, setPlaces] = useState<IPlaces[]>([] as IPlaces[]);

  const navigate = useNavigate();

  const { goToTop } = useScroll();

  useEffect(() => {
    goToTop();
    const adapter = new PlaceGetAllAdapter<IPlaces[]>();
    const placeServices = new PlaceGetAll(adapter);
    const data = placeServices.getAll();
    setPlaces(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigateToAddMenuItem = useCallback(
    (index: number) => {
      navigate(`/menu/${index}/new-plate`);
    },
    [navigate],
  );

  const handleNavigateToListMenuItem = useCallback(
    (index: number) => {
      navigate(`/menu/${index}`);
    },
    [navigate],
  );

  return (
    <Default hasGoBack={false}>
      <Container>
        <h1>Lugares</h1>
        <p>{getPlacesExtensionNumber(places)}</p>
        <ul>
          {places.map((place, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <PlaceItem
                placeData={place}
                onPlusClick={() => handleNavigateToAddMenuItem(index)}
                onCardClick={() => handleNavigateToListMenuItem(index)}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Default>
  );
};

export default Places;
