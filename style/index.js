import { createGlobalStyle } from 'styled-components'
import themeBase from './theme'

const GlobalStyle = createGlobalStyle`
  html, body, #__next, #root{
    height:100%;
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x:hidden;
    letter-spacing: 0.06rem;
    line-height: 140%;
    -webkit-font-smoothing: antialiased;
    background: ${props => (props.theme.main.background)};
    font-family: ${props => props.theme.main.font};
    color: ${props => props.theme.main.color};
    * {
      box-sizing: border-box;
    }
  }
`

export const theme = themeBase

export default GlobalStyle