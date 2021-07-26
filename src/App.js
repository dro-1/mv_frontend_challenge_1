import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './pages/login.page'
import { HomePage } from './pages/home.page'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  )
}

export default App
