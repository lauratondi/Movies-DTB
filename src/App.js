import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
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
          <Menu />
          <div className='flex-container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/movie/:id' component={Movie} />
              <Route exact path='/populars' component={Populars} />
              <Route exact path='/populars/:id' component={Popular} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
