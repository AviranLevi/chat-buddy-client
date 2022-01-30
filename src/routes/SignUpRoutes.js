import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//pages
import Signup from '../pages/Signup'
import Invite from '../pages/Invite'

const SignupRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/invite/:userId">
        <Invite />
      </Route>

      <Route path="/*">
        <Redirect exact to="/signup" />
      </Route>
    </Switch>
  </Router>
)

export default SignupRoutes
