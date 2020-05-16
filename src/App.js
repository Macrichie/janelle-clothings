import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignupAndSigninPage from './pages/sign-up-and-sign-in/SignupAndSignin.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signup' component={SignupAndSigninPage} />
      </Switch>
    </div>
  )
}

export default App;
