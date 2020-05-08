import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Landing />
      </div>
    </Provider>
  );
};

export default App;
