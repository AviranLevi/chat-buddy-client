import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import MaxChat from '../pages/Home/MaxChat'
import RoomChat from '../pages/Home/RoomChat'
import RoomInfo from '../pages/Home/RoomInfo'
import RoomsPannel from '../pages/Home/RoomsPannel'
import Navbar from '../pages/Navbar'

const MobileMainRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <RoomsPannel />
      </Route>

      <Route exact path="/max">
        <MaxChat />
      </Route>

      <Route exact path="/:chat?">
        <RoomChat />
      </Route>

      <Route exact path="/:chat/info">
        <RoomInfo />
      </Route>
    </Switch>
  </Router>
)

export default MobileMainRoutes
