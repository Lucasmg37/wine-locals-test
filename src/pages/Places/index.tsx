import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceItem from '../../components/PlaceItem';
import Default from '../../layout/Default';
import IPlaces from '../../models/IPlaces';
import PlaceService from '../../services/Place';

import { Container } from './styles';

const Places: React.FC = () => {
  const [places, setPlaces] = useState<IPlaces[]>([] as IPlaces[]);

  const navigate = useNavigate();

  useEffect(() => {
    const placeServices = new PlaceService();
    const data = placeServices.getAll();
    setPlaces(data);
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
    <Default>
      <Container>
        <h1>Lugares</h1>
        <p>
          {places.length > 1 && `${places.length} lugares cadastrados`}
          {places.length === 1 && `1 lugar cadastrado`}
          {places.length < 1 && `Sem lugares cadastrados`}
        </p>
        <ul>
          {places.map((place, index) => (
            <li>
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
