import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IValidationError from '../../common/interfaces/IValidationError';
import DefaultButton from '../../components/Buttons/Default';
import Price from '../../components/Inputs/Addons/Price';
import DefaultInput from '../../components/Inputs/Default';
import TextArea from '../../components/Inputs/TextArea';
import ValidationError from '../../errors/ValidationError';
import useScroll from '../../hooks/useScroll';
import Default from '../../layout/Default';
import IMenuItem from '../../models/IMenuItem';
import IPlaces from '../../models/IPlaces';
import MenuCreateAdapter from '../../services/DataMananger/Adapters/MenuCreate';
import PlaceGetOneAdapter from '../../services/DataMananger/Adapters/PlaceGetOne';
import MenuCreate from '../../services/Menu/Create';
import PlaceGetOne from '../../services/Place/GetOne';

import { Container, DescriptionInfo } from './styles';

const NewPlate: React.FC = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState<IMenuItem>({} as IMenuItem);
  const [place, setPlace] = useState<IPlaces>({} as IPlaces);
  const navigate = useNavigate();
  const [error, setError] = useState<IValidationError>({} as IValidationError);

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

  const handleAddNewItem = useCallback(
    e => {
      e.preventDefault();

      if (id) {
        try {
          setError({} as IValidationError);
          const adapter = new MenuCreateAdapter();
          const menuServices = new MenuCreate(adapter);
          menuServices.create(+id, menuItem);
          navigate(-1);
        } catch (err) {
          if (err instanceof ValidationError) {
            setError(err.getError());
          }
        }
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
            error={error.field === 'price' && error.error}
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
