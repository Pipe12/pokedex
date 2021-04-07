import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,600;0,800;1,300&display=swap');

  :root {
    --darkest-blue: hsl(200, 15%, 8%);
    --thirty-darkest-blue: hsla(200, 15%, 8%, .3);
    --thirty-dark-gray: hsla(0, 0%, 52%, .3);
    --dark-gray: hsl(0, 0%, 52%);
    --very-light-gray: hsl(0, 0%, 98%);
    --pokemon-red: hsl(1, 83%, 63%);
    --pokemon-yellow: hsl(46, 99%, 55%);
    --pokemon-blue: hsl(218, 51%, 44%);
    
    --background: var(--very-light-gray);
    --background-element: white;
    --text: var(--darkest-blue);
    --input: var(--dark-gray);
    --shadow: var(--thirty-dark-gray);
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default GlobalStyles;
