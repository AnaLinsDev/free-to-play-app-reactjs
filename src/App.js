import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import GamesListPage from './pages/games-list/games-list';
import ErrorPage from './pages/error/error-page';
import GameByIdPage from './pages/game-by-id/game-by-id';
import AboutMePage from './pages/about-me/about-me';
import SignInSignUpPage from './pages/signin-and-signup/signin-and-signup';
import WishlistPage from './pages/wishlist/wishlist'

import Header from './components/header/header';
import Footer from './components/footer/footer';
;


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
      }
      else{
        this.setState({ currentUser: userAuth })
    };
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div className='App' >
      <Router>
      <Header currentUser={this.state.currentUser} />
      <Switch>
          <Route exact path='/' component={GamesListPage} />
          <Route path='/game/:id' component={GameByIdPage} />
          <Route path='/aboutme' component={AboutMePage} />
          <Route path='/signin-signup' component={SignInSignUpPage} />
          <Route path='/wishlist' component={WishlistPage} />
          <Route component={ErrorPage}  />
      </Switch>
      </Router>
      <Footer />
    </div>
    );
  }
}


export default App;
