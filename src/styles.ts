import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  salmonLight: '#FFF8F2',
  yellowLight: '#FFEBD9',
  white: '#FFFFFF'
}

export const breackpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.salmonLight};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breackpoints.desktop}) {
      max-width: 90%;
    }
  }
`
