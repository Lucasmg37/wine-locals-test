import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  display: flex;
  align-items: center;

  @media (min-width: 748px) {
    font-size: 20px;
    padding-right: 4px;
  }
`;
