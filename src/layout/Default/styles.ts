import styled from 'styled-components';

export const Container = styled.div`
  background: #292929;
  flex: 1;
  display: flex;
  flex-direction: column;

  > img {
    position: absolute;
    width: 120%;
    left: -10%;
    top: 0;
    z-index: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
`;
