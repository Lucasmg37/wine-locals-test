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

  html, body {
   width: 100%;
   height: 100%;
   overflow: hidden;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    max-width: 100%;
    height: 100%;
  }

  input, textarea {
    background: transparent;
    border: none;
  }

  textarea {
    resize: none;
  }

  ul, ol {
    list-style: none;
  }
`;

export default Global;
