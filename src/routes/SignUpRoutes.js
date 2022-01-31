import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import Signup from '../pages/Signup'
import Invite from '../pages/Invite'

const SignupRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>

      <Route exact path="/invite/:userId">
        <Invite />
      </Route>
    </Switch>
  </Router>
)

export default SignupRoutes
