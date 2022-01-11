import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'

const Routes = ({ user }) => (
  <Router>
    {user ? (
      <Switch>
        <Route path='/:room'>
          <Home user={user} />
        </Route>
        <Route path='/*'>
          <Redirect exact to='/home' />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route path='/'>
          <Redirect exact to='/signup' />
        </Route>
      </Switch>
    )}
  </Router>
)

export default Routes
