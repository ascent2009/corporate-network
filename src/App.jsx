import {Route, Switch, Redirect} from 'react-router'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import './App.scss'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/home' component={HomePage} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
