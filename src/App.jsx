import {Route, Switch, Redirect} from 'react-router'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import './App.scss'

function App() {
  console.log(localStorage.nick);
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login' component={LoginPage} />
      {/* {localStorage.nick ? */}
      <Route exact path='/home' component={HomePage} />
      {/* // : alert('ВВеди ник')} */}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
