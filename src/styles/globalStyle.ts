import { createGlobalStyle } from 'styled-components'
import Palette from './ColorPalette'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.active {
    border-left: 4px solid ${Palette.alt_5};
   background: #252831;
    cursor: pointer;
}
`
export default GlobalStyle
