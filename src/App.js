import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from 'Routes/landingPage'

export default function App () {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </>
  )
}
