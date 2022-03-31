import { createGlobalStyle } from 'styled-components'
import T from 'theme'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${T.font.family};
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #__next {
      background-color: ${T.colors.secondary};
      color: ${T.colors.black};
  }

  body, #root, input, select, textarea, button {
      font: ${T.font.normal} ${T.font.sizes.medium} 'Inter', sans-serif;
  }

  button {
    border: none;
    border-radius: ${T.border.radius};
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.6rem !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.primary};
    border-radius: 2rem;
    border: 0.3rem solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.primary} ${T.colors.white} !important;
    scrollbar-width: 1.6rem !important;
  }
`
