import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

import MiniHeader from './components/layout/MiniHeader';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

import Login from './components/auth/Login';
import Landing from './components/landing/Landing';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import Postanad from './components/pages/postAnAd/Postanad';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MiniHeader />
          <Navbar />
          <Header />
          <Route exact path="/" component={Landing} />
          <div className="">
            <Route exact path="/login" component={Login} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/postanad" component={Postanad} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
