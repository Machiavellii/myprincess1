import React from "react";

const HeaderGirl = ({ profile }) => {
  const {
    location,
    user: { nickname },
    phone,
    slogan,
    webcamlink
  } = profile;

  return (
    <div className="headerGirl">
      <div className="container">
        <h1>{nickname}</h1>
        <p className="subheading">{slogan}</p>
        <a href={`tel:${phone}`} className="mb-3 d-block">
          <i className="fas fa-phone rotate" /> {phone}
        </a>

        {webcamlink ? (
          <a href={webcamlink} target="_blank" style={{ cursor: "pointer" }}>
            <i class="fas fa-video"></i> Webcam link
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeaderGirl;
