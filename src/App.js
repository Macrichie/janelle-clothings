import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css'

import { auth } from './firebase/firebase.utils'
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignupAndSigninPage from './pages/sign-up-and-sign-in/SignupAndSignin.component'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignupAndSigninPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
