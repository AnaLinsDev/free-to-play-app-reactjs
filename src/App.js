import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
//pages
import GamesListPage from './pages/games-list/games-list';
import ErrorPage from './pages/error/error-page';
import GameByIdPage from './pages/game-by-id/game-by-id';
import AboutMePage from './pages/about-me/about-me';
import SignInSignUpPage from './pages/signin-and-signup/signin-and-signup';
import WishlistPage from './pages/wishlist/wishlist'
//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
//redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      }
      else{
        setCurrentUser( userAuth )
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
      <Header />
      <Switch>
          <Route exact path='/' component={GamesListPage} />
          <Route path='/game/:id' component={GameByIdPage} />
          <Route path='/aboutme' component={AboutMePage} />
          <Route path='/wishlist' component={WishlistPage} />
          <Route  exact path='/signin' render={
              () => this.props.currentUser ? 
              (<Redirect to='/'/>) : 
              (<SignInSignUpPage />)}/> 

          <Route component={ErrorPage}  />

      </Switch>
      </Router>
      <Footer />
    </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
