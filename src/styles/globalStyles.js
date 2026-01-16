import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #e0e2d4; 
    color: #333;
    font-family: "Nunito", sans-serif; 
    min-height: 100vh;
  }
`;


export default GlobalStyles;