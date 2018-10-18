import { injectGlobal } from 'styled-components'
// import media from 'styles/media'
import theme from 'styles/theme'

/* eslint-disable no-unused-expressions */
export default () => {
  injectGlobal`

    html {
      height: 100%;
      font-size: 10px;
    }

    body {
      height: 100%;
      margin: 0;
      font-family: ${theme.fontFamilySansSerif};
      font-size: 14px;
      line-height: 1.42857;
    }
  `
}
