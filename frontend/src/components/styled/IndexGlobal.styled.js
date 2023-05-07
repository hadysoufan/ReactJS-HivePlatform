import { createGlobalStyle } from 'styled-components';

const IndexGlobal = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  outline: none;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  line-height: 1;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.backGround} ;
}


`;

export default IndexGlobal;
