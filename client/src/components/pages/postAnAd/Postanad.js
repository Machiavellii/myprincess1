import React from 'react';
import PricingCard from './PricingCard';

// import {CardElement, injectStripe} from 'react-stripe-elements';

const Postanad = () => {
  return (
    <div>
      <h1 className="text-center my-5">Post an ad</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12">
            <PricingCard
              hours="168 hours"
              subscription_plan="7"
              price="Free"
              amount="0"
            />
          </div>

          <div className="col-md-4 col-sm-12 col-12">
            <PricingCard
              subscription_plan="30"
              hours="720 hours"
              price="90.00"
              currency="CHF"
              badge="THE MOST POPULAR"
              buttonStyle="full"
              amount={90}
            />
          </div>

          <div className="col-md-4 col-sm-12 col-12">
            <PricingCard
              subscription_plan="90"
              hours="2160 hours"
              price="240.00"
              currency="CHF"
              extra="Photo shoots offered"
              amount={240}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postanad;
