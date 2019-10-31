import React from 'react';

const HeaderGirl = ({ profile }) => {
  const {
    canton,
    user,
    phone
  } = profile;



  return (
    <div className="headerGirl">
      <div className="container">
        <h1>{user.nickname ? user.nickname : 'User not have nickname'}</h1>
        <p className="subheading">slut waiting for you in {canton}</p>
        <a href={`tel:${phone}`}>
          <i className="fas fa-phone rotate" /> {phone}
        </a>
      </div>
    </div>
  );
};

export default HeaderGirl;
