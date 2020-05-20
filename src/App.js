import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignupAndSigninPage from './pages/sign-up-and-sign-in/SignupAndSignin.component'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      } else {
        this.setState({currentUser: userAuth})
      }
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
