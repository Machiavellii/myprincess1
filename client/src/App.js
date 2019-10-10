import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

import MiniHeader from './components/layout/MiniHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Landing from './components/landing/Landing';
import DescribeContent from './components/landing/landingpages/landingcontent/singleGirl/Describe';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import Postanad from './components/pages/postAnAd/Postanad';
import PostAnAdForm from './components/pages/postAnAd/PostAnAdForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MiniHeader />
          <Navbar />

          <Route exact path="/" component={Landing} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/postanad" component={Postanad} />
          <Route exact path="/postanadform" component={PostAnAdForm} />

          <Route exact path="/describe-content" component={DescribeContent} />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
