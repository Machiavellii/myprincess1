import React from 'react';

const PricingCard = (props) =>{
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <span className="badge badge-secondary">{props.badge}</span>
                    <h6 className="card-title">{props.time}</h6>
                    <h3 className="card-title">{props.price} <sup>{props.currency}</sup> </h3>
                    <p className="card-text">Quick and easy registration</p>
                    <strong>{props.extra}</strong> <br />
                    <strong>profile </strong> <span>custom</span><br />
                    <strong>visibility  </strong> <span>total</span><br />
                    <strong>3000 visits / day </strong> <span>MyPrincess.ch</span><br />
                    <strong>Support </strong> <span>free</span><br />
                    <a href="#" className="btn btn-primary">Start</a>
                </div>
            </div>
        </div>
    )
}

export default PricingCard