import React from 'react';
import Review from './componentGirls/Review';
import Links from './componentGirls/Links';
import About from './componentGirls/Aboutgirl';
import View from './componentGirls/View';

const Girl = () => {
  return (
    <div className="describe-girl">
      <div className="container">
        <Review />
        <About />
        <Links />
        <View />
      </div>
    </div>
  );
};

export default Girl;
