import YekanBakhBold from "@assets/fonts/YekanBakh-Bold.woff";
import YekanBakhBolder from "@assets/fonts/YekanBakh-ExtraBold.woff";
import YekanBakhRegular from "@assets/fonts/YekanBakh-Regular.woff";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: "Yekan-Bakh";
  font-style: normal;
  font-weight: 400;  
  src:    url('${YekanBakhRegular}') format("woff");
  font-display: swap;
}
  @font-face {
    font-family: "Yekan-Bakh";
    font-style: normal;
    font-weight: 600;
    src: url('${YekanBakhBold}') format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Yekan-Bakh";
    font-style: normal;
    font-weight: 900;
    src: url('${YekanBakhBolder}') format("woff");
    font-display: swap;
  }
  body {
    font-size: 16px;
    line-height: 2;
    font-family:  'Yekan-Bakh';
    font-weight: 400;
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;      
    background-color: ${({ theme }) => theme?.style?.background?.primary};
    color: ${({ theme }) => theme?.style?.text?.primary};
    direction:rtl;
    min-height:100vh;
  }
  h1,h2,h3,h4,h5{
    margin: 0;
    padding:0;
  }  
  input,textarea,button{
    font-family:  Yekan-Bakh;
  }
  `;
export default GlobalStyles;
