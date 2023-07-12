import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Montserrat", sans-serif;
    text-align: center;
     background-color: #ff4c68;;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat-bold", sans-serif;
    font-size:1.5rem;
  }

  p {
    color: #8f8f8f;
       font-size:1rem;
  }
  

  .big-heading {
    font-family: "Montserrat-black", sans-serif;
    font-size: 3.5rem;
    line-height: 1.5;
  }

  .section-heading {
    font-size: 3rem;
    line-height: 1.5;
  }
  
`;

export default GlobalStyles;
