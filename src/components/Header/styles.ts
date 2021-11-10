import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  /* position: fixed; */
  width: 100%;

  > button {
    height: 32px;
    width: 32px;
    margin-right: -32px;
  }

  > svg {
    margin: auto;
  }
`;
