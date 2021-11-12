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

    @media (min-width: 748px) {
      margin: 0 auto;
      height: 500px;
      width: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;

  @media (min-width: 748px) {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }
`;
