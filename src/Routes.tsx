import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { HandleRedirect } from './pages/HandleRedirect'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:shortUrl" exact component={HandleRedirect} />
      </Switch>
    </Router>
  )
}
