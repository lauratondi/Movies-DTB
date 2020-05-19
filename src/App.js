import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Navbar from './components/layout/Navbar';
import Search from './components/movies/Search';
import Populars from './components/popular/Populars';
import Popular from './components/popular/Popular';
import Landing from './components/pages/Landing';
import Movie from './components/movies/Movie';
import Menu from './components/layout/Menu';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          {/* <Menu />
          <Search /> */}
          <Landing />
          <Switch>
            {/* <Route exact path='/' component={Landing} /> */}
            <Route exact path='/movie/:id' component={Movie} />
            <Route exact path='/populars' component={Populars} />
            <Route exact path='/populars/:id' component={Popular} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
