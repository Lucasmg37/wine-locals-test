import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/Buttons/Default';
import Price from '../../components/Inputs/Addons/Price';
import DefaultInput from '../../components/Inputs/Default';
import TextArea from '../../components/Inputs/TextArea';
import useScroll from '../../hooks/useScroll';
import Default from '../../layout/Default';
import IMenuItem from '../../models/IMenuItem';
import IPlaces from '../../models/IPlaces';
import MenuService from '../../services/Menu';
import PlaceService from '../../services/Place';

import { Container, DescriptionInfo } from './styles';

const NewPlate: React.FC = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState<IMenuItem>({} as IMenuItem);
  const [place, setPlace] = useState<IPlaces>({} as IPlaces);
  const navigate = useNavigate();

  const { goToTop } = useScroll();

  useEffect(() => {
    goToTop();

    if (id) {
      const placeService = new PlaceService();
      const data = placeService.getOne(+id);
      setPlace(data);
    }
  }, [id]);

  const handleAddNewItem = useCallback(
    e => {
      e.preventDefault();

      if (id) {
        const menuService = new MenuService();
        menuService.create(+id, menuItem);
        navigate(-1);
      }
    },
    [id, menuItem, navigate],
  );

  return (
    <Default>
      <Container>
        <h1>{place.name}</h1>
        <form onSubmit={handleAddNewItem}>
          <DefaultInput
            label="Nome do prato"
            type="text"
            placeholder="Prato"
            required
            onChange={e => setMenuItem({ ...menuItem, name: e.target.value })}
          />
          <DefaultInput
            prePend={<Price />}
            label="Valor"
            type="number"
            step="0.01"
            min="0"
            required
            placeholder="0,00"
            onChange={e => setMenuItem({ ...menuItem, price: +e.target.value })}
          />
          <TextArea
            label="Descrição do prato"
            aria-describedby="descriptionInfo"
            placeholder="Insira uma descrição"
            required
            maxLength={200}
            onChange={e =>
              setMenuItem({ ...menuItem, description: e.target.value })
            }
          />
          <DescriptionInfo id="descriptionInfo">
            *A descrição deve conter até 200 caracteres.
          </DescriptionInfo>

          <DefaultButton>Salvar</DefaultButton>
        </form>
      </Container>
    </Default>
  );
};

export default NewPlate;
