import React from 'react'
import ReactDOM from 'react-dom'
import { QueryParamProvider } from 'use-query-params'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import 'Styles/index.scss'
// import './i18n'

const app = document.getElementById('app')

const main = (
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>
)

ReactDOM.render(main, app)
