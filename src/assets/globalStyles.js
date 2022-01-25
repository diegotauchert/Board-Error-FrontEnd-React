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
    background: #FFF;
    background-image: linear-gradient(to right, rgba(0,0,0,.1) 0%, rgba(255,255,255,1) 100%);
    background-size: 15% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
  }
  iframe{
    display: none;
  }
  h1{
    font-size: 1.6rem;
    font-weight: 500;
    border-bottom: 1px solid #808080;
    line-height: 1.8;
  }
  .animate-clear{
    position: relative;
    z-index: 2;
    animation: slideLeft .4s ease-in-out 1 forwards;
  }
  @keyframes slideLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(10%);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  .animate-show{
    animation: slideUp .4s ease-in-out 1 both;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    40% {
      transform: translateY(15%);
      opacity: .3;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media not all and (min-resolution:.001dpcm) { @media {
    body{
      background-image: none;
    }
  }}
`;
 
export default GlobalStyle;