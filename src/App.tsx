import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/home/Home'
import Login from './views/login/Login'

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
