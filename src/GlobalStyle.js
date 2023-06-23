import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Montserrat',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  

  
}



p, h2, h1 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration:none
}
`;
