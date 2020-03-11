import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/PricingCard.css";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import {
  subscribePlan,
  getCurrentAgency,
  payment
} from "../../../actions/agencyProfile";

const AgencyPricingCard = ({
  subscribePlan,
  agency: { agency },
  payment,
  days,
  subscription_plan,
  price,
  badge,
  currency,
  amount
}) => {
  useEffect(() => {
    getCurrentAgency();
  }, [getCurrentAgency]);

  const [checked, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(!checked);

    const time = { subscription_plan };

    subscribePlan(time);
  };

  return (
    <div className="card h-100">
      <div className="card-body text-center">
        <span className="badge badge-secondary mt-2 mb-3 p-2 ">{badge}</span>
        <h6 className="card-title pb-3 time">{days}</h6>
        <h3 className="card-title pricing">
          {price} <sup>{currency}</sup>{" "}
        </h3>
        <p className="card-text description">Quick and easy registration</p>
        {/* <strong>{extra}</strong> <br /> */}
        <strong>profile </strong> <span>custom</span>
        <br />
        <strong>visibility </strong> <span>total</span>
        <br />
        <strong>3000 visits / day </strong> <span>Xanibis.ch</span>
        <br />
        <div className="form-group">
          <label htmlFor="value">
            You agree with buying this subscription plan
          </label>
          <input
            className="form-group mr-2"
            type="checkbox"
            id="value"
            // value={true}
            onClick={() => onClick()}
            name="value"
            defaultChecked={checked}
          />
        </div>
        <br />
      </div>
      {checked ? (
        <div className="card-footer text-center">
          <StripeCheckout
            stripeKey="pk_test_2QL8V6xKMDyfzQc87dCmfPXU"
            // description={description}
            name="Xanibis.ch"
            //image={Logo}
            billingAddress
            amount={amount * 100}
            label="Start"
            token={payment.bind(this, agency)}
          />
        </div>
      ) : (
        <small className="text-center">First checked agree buying</small>
      )}
    </div>
  );
};

AgencyPricingCard.propTypes = {
  getCurrentAgency: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  agency: state.agencyProfile
});

export default connect(mapStateToProps, {
  payment,
  subscribePlan,
  getCurrentAgency
})(AgencyPricingCard);
