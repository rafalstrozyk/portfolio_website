import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  color: ${({theme}) => theme.greyLight_2};
}
`