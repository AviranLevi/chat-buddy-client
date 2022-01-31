import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//pages
import Home from '../pages/Home'
import Navbar from '../pages/Navbar'

const MainRoutes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/:chat?">
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default MainRoutes
