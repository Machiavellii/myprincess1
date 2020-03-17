import React from 'react';

const HeaderGirl = ({ profile }) => {
  const {
    location,
    user: { nickname },
    phone,
    slogan
  } = profile;

  return (
    <div className="headerGirl">
      <div className="container">
        <h1>{nickname}</h1>
        <p className="subheading">{slogan}</p>
        <a href={`tel:${phone}`}>
          <i className="fas fa-phone rotate" /> {phone}
        </a>
      </div>
    </div>
  );
};

export default HeaderGirl;
