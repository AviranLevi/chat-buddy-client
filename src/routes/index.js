import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Navbar from '../pages/Navbar'

const Routes = ({ user }) =>
  user.id ? (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/:chat?'>
          <Home />
        </Route>
        <Route path='/*'>
          <Redirect exact to='/' />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route path='/*'>
          <Redirect exact to='/signup' />
        </Route>
      </Switch>
    </Router>
  )

export default Routes
