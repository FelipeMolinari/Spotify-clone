import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin:0;
  box-sizing: border-box;
  outline:0;
}

body, html, #root{
  width: 100vw;
  height: 100vh;
  color: #f1f1f1;
}

body{
  text-rendering: optimizeLegibility !important;
  --webkit-font-smoothing: antialiased !important;
  background: #181818;
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
