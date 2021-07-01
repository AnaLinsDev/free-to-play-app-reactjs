import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import GamesListPage from './pages/games-list/games-list';
import ErrorPage from './pages/error/error-page';
import GameByIdPage from './pages/game-by-id/game-by-id';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AboutMePage from './pages/about-me/about-me';

function App() {
  return (
    <div className='App' >
      <Router>
      <Header />
      <Switch>
          <Route exact path='/' component={GamesListPage} />
          <Route path='/game/:id' component={GameByIdPage} />
          <Route path='/aboutme' component={AboutMePage} />
          <Route component={ErrorPage}  />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
