import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const rootElement = document.getElementById('app')

const renderApp = element => {
  const App = require('./App').default
  render(
    <div>Hello</div>,
    element
  )
}

renderApp(rootElement)

module.hot &&
  module.hot.accept('./App.js', () => renderApp(rootElement))
