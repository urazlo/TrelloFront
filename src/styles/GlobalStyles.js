import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, html {
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin: 0 auto;
    overflow-y : hidden;
    font-family: sans-serif;
  }

  button {
    border: 0;
    padding: 0;
    background: none;
    outline: none;
    border-radius: 3px;
  }

  .hidden{
    display: none;
  }
`;
