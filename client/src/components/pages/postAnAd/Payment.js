import React, { useEffect } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { payment, getCurrentProfile } from "../../../actions/profile";
import { withRouter } from "react-router-dom";

import Logo from "../../../img/logo.png";

const Payment = ({ profile: { profile }, history, payment }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // console.log(profile);

  const amount = profile.subscription_plan === "30" ? 90 : 240;

  console.log(amount);

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_2QL8V6xKMDyfzQc87dCmfPXU"
        // description={description}
        name="MyPrincess.ch"
        image={Logo}
        billingAddress
        amount={amount * 100}
        label="Start"
        token={payment.bind(this, profile)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  payment,
  getCurrentProfile
})(withRouter(Payment));
