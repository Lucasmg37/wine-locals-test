import React, { useCallback } from 'react';
import DefaultButton from '../../components/Buttons/Default';
import Price from '../../components/Inputs/Addons/Price';
import DefaultInput from '../../components/Inputs/Default';
import TextArea from '../../components/Inputs/TextArea';
import Default from '../../layout/Default';

import { Container, DescriptionInfo } from './styles';

const NewPlate: React.FC = () => {
  const handleAddNewItem = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <Default>
      <Container>
        <h1>Silva Lanches</h1>
        <form onSubmit={handleAddNewItem}>
          <DefaultInput
            label="Nome do prato"
            type="text"
            placeholder="Prato"
            required
          />
          <DefaultInput
            prePend={<Price />}
            label="Valor"
            type="number"
            step="0.01"
            min="0"
            required
            placeholder="0,00"
          />
          <TextArea
            label="Descrição do prato"
            aria-describedby="descriptionInfo"
            placeholder="Insira uma descrição"
            required
            maxLength={200}
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
