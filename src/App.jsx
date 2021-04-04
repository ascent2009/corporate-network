import {useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import './App.scss'
import Training from './components/Training' 

function App() {

  const updateLocalStorage = localStorage.getItem('nick')

  useEffect(() => console.log('updateLocalStorage: ', localStorage.nick));
  
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route path='/home' component={updateLocalStorage ? HomePage : Training} /> 
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
