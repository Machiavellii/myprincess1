import React from 'react';
import '../../../styles/PricingCard.css'

const PricingCard = props => {
  return (
    <div className="card mb-5">
      <div className="card-body text-center">
        <span className="badge badge-secondary mt-2 mb-3 p-2 badge">{props.badge}</span>
        <h6 className="card-title pb-3 time">{props.time}</h6>
        <h3 className="card-title pricing">
          {props.price} <sup>{props.currency}</sup>{' '}
        </h3>
        <p className="card-text description">Quick and easy registration</p>
        <strong>{props.extra}</strong> <br />
        <strong>profile </strong> <span>custom</span>
        <br />
        <strong>visibility </strong> <span>total</span>
        <br />
        <strong>3000 visits / day </strong> <span>MyPrincess.ch</span>
        <br />
        <strong>Support </strong> <span>free</span>
        <br />
        <a href="#" className={"btn btn-primary my-3 py-3 px-4 " + (props.buttonStyle ? 'full' : 'empty')}>
          Start  
          <i class="fas fa-caret-right right-icon" />
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
