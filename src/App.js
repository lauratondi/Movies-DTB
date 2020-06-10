import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Navbar from './components/layout/Navbar';
import Menu from './components/layout/Menu';
import Populars from './components/popular/Populars';
import Popular from './components/popular/Popular';
import Landing from './components/pages/Landing';
import Movie from './components/movies/Movie';
import Footer from './components/layout/Footer';
import store from './store';
import { Provider } from 'react-redux';
import TopRated from './components/topRated/TopRated';
import TopPage from './components/topRated/TopPage';
import Discovers from './components/discovers/Discovers';
import Discover from './components/discovers/Discover';
import TvShows from './components/tv/TvShows';
import TvShow from './components/tv/TvShow';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container bg-grey'>
            <Menu />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/movie/:id' component={Movie} />
              <Route exact path='/populars' component={Populars} />
              <Route exact path='/populars/:id' component={Popular} />
              <Route exact path='/topRated' component={TopRated} />
              <Route exact path='/topRated/:id' component={TopPage} />
              <Route exact path='/discover/' component={Discovers} />
              <Route exact path='/discover/:id' component={Discover} />
              <Route exact path='/tv/' component={TvShows} />
              <Route exact path='/tv/:id' component={TvShow} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
