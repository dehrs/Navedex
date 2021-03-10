import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFFFFF;
    color: #212121
  }

  body, input{
    font-family: 'Montserrat';
    font-size: 16px
  }

  h1, h2, h3, h4,h5,h6,strong {
    font-weight: 600;
  }

  input{
    padding: 8px;
    width: 100%;
    border: 1px solid #424242;
  }

  label{
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 2px;
  }

  button{
    cursor: pointer;
    font-weight:600;
    font-size: 14px;
  }


`;
