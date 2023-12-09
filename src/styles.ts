import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  salmonLight: '#FFF8F2',
  yellowLight: '#FFEBD9',
  white: '#FFFFFF'
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
  }
`
