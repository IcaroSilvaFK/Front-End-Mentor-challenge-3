import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,#root{
    font-family: ${({ theme }) => theme.fonts.barlow};

    font-size: 1rem;

    width:100%;
    height: 100vh;
  }



  button,input{
    border:0;
    outline: 0;
  }

  button{
    cursor: pointer;
  }

  ul,li{
    list-style: none;
  }

`;
