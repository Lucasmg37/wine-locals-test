import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: #ffffff};
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }

  html, body, #root {
    width: 100%;
    overflow-x: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ul, ol {
    list-style: none;
  }
`;

export default Global;
