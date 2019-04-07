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
    line-height: 180%;
    -webkit-font-smoothing: antialiased;
    background: ${props => (props.theme.main.background)};
    font-family: ${props => props.theme.main.font};
    color: ${props => props.theme.main.color};
    font-size:17px;
    * {
      box-sizing: border-box;
    }


    a {
      color:#1c93e7;
      text-decoration:none;
      font-weight:bold;
    }
  }
`

export const theme = themeBase

export default GlobalStyle