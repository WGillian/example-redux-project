import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Punk from 'containers/punk'
import theme from 'styles/theme'
import createStore from '../../redux/store'
import injectGlobalStyles from './globalStyles.js'

injectGlobalStyles()

const store = createStore()

export default () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Punk />
    </Provider>
  </ThemeProvider>
)
