import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Menu from './components/layout/Menu';
import Landing from './components/pages/Landing';
import Movie from './components/movies/Movie';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/movie/:id' component={Movie} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
