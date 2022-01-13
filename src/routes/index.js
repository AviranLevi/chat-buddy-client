import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import Profile from '../pages/Profile'

const Routes = ({ user }) =>
  user ? (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/room/:room'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/*'>
          <Redirect exact to='/room' />
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
