import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
