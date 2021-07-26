import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/login.page'
import HomePage from './pages/home.page'
import { connect } from 'react-redux'

const App = ({ isSignedIn }) => {
  const PrivateRoute = (props) => {
    return isSignedIn ? <Route {...props} /> : <Redirect to="/login" />
  }

  const PublicRoute = (props) => {
    return isSignedIn ? <Redirect to="/" /> : <Route {...props} />
  }

  return (
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <PublicRoute path="/login" exact component={LoginPage} />
    </Switch>
  )
}

const mapStateToProps = (state) => ({
  isSignedIn: state.user.name.length >= 3,
})

export default connect(mapStateToProps)(App)
