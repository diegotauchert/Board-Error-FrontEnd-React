import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    overflow-x: hidden;
    overflow-y: auto;
    background-origin:inital;
    background: #FFF;
    background-image: linear-gradient(to right, rgba(0,0,0,.1) 0%, #FFF 100%);
    background-size: 15%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
  }
  h1{
    font-size: 1.6rem;
    font-weight: 500;
    border-bottom: 1px solid #808080;
    line-height: 1.8;
  }
`;
 
export default GlobalStyle;