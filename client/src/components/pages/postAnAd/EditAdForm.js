import React, { Fragment, useState, useEffect } from "react";
import "../../../styles/PostAnAdForm.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentProfile, createProfile } from "../../../actions/profile";

import {
  spokenLanguageList,
  categoryList,
  servicesList,
  silhouetteList,
  originList,
  genderList,
  sexual_orientationList,
  typeList
} from "../../../constants/data.json";

import InputGroup from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import TextAreaGroup from "../../common/TextAreaGroup";
import {
  // nickname,
  typeLabel,
  sloganLabel,
  genderLabel,
  categoryLabel,
  sexualOrientationLabel,
  ageLabel,
  silhouetteLabel,
  originLabel,
  descriptionLabel,
  addressLabel,
  businesshoursLabel,
  rateLabel,
  phonenumberLabel,
  websiteLabel
} from "../../common/consts";

const EditAdForm = ({
  createProfile,
  history,
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  const [formData, setFormData] = useState({
    gender: "",
    sexual_orientation: "",
    phone: "",
    category: "",
    services: [],
    age: "",
    origin: "",
    description: "",
    address: "",
    languages: [],
    silhouette: "",
    rate: "",
    slogan: "",
    hours: "",
    website: "",
    type: "",
    errors: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      gender: loading || !profile.gender ? " " : profile.gender,
      sexual_orientation:
        loading || !profile.sexual_orientation
          ? " "
          : profile.sexual_orientation,
      phone: loading || !profile.phone ? " " : profile.phone,
      category: loading || !profile.category ? " " : profile.category,
      services: loading || !profile.services ? " " : profile.services,
      age: loading || !profile.age ? " " : profile.age,
      type: loading || !profile.type ? " " : profile.type,
      origin: loading || !profile.origin ? " " : profile.origin,
      description: loading || !profile.description ? " " : profile.description,
      address: loading || !profile.address ? " " : profile.address,

      languages: loading || !profile.languages ? " " : profile.languages,
      silhouette: loading || !profile.silhouette ? " " : profile.silhouette,
      rate: loading || !profile.rate ? " " : profile.rate,
      slogan: loading || !profile.slogan ? " " : profile.slogan,
      hours: loading || !profile.hours ? " " : profile.hours,
      website: loading || !profile.website ? " " : profile.website,
      is_active: loading || !profile.is_active ? " " : profile.is_active
    });
  }, [loading, getCurrentProfile]);

  const {
    gender,
    sexual_orientation,
    phone,
    category,
    services,
    age,
    origin,
    description,
    address,

    languages,
    silhouette,
    rate,
    slogan,
    hours,
    website,
    type,
    is_active,
    errors
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckBox = (e, item) => {
    if (e.target.checked) {
      languages.push(item);
    }

    languages.map((lang, i) => {
      if (!e.target.checked) {
        return e.target.value === lang ? languages.splice(i, 1) : languages;
      }
    });
  };

  const getCheckStatus = (value, type) => {
    let list = null;

    if (type === "languages") {
      list = languages;
    }

    if (type === "services") {
      list = services;
    }

    if (value === is_active) {
      return true;
    }

    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          return true;
        }
      }
    }
  };

  const onCheckBoxServ = (e, service) => {
    if (services.indexOf(e.target.value) < 1 && e.target.checked) {
      services.push(service);
    }

    services.map((serv, i) => {
      if (!e.target.checked) {
        return e.target.value === serv ? services.splice(i, 1) : services;
      }
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className="text-center">Post an ad - 7 days</h1>
      <form
        className="container mb-5 edit-form"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <p>Job Activity</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="is_active"
              id="active"
              value={true}
              onChange={e => onChange(e)}
              checked={getCheckStatus(true)}
            />
            <label className="form-check-label" htmlFor="active">
              active
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="is_active"
              id="inactive"
              value={false}
              onChange={e => onChange(e)}
              checked={getCheckStatus(false)}
            />
            <label className="form-check-label" htmlFor="inactive">
              inactive
            </label>
          </div>
        </div>

        <SelectListGroup
          name="type"
          value={type}
          onChange={onChange}
          error={errors}
          options={typeList}
          labels={typeLabel}
        />

        <div className="form-group">
          <label htmlFor=" Spoken languages" className="form-check-label">
            Spoken languages
          </label>
          <br />
          {spokenLanguageList.map((item, index) => {
            return (
              <div
                className="form-check form-check-inline dynamic-checkbox"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item}
                  value={item}
                  name="languages"
                  onChange={e => onCheckBox(e, item)}
                  checked={getCheckStatus(item, "languages")}
                />
                <label
                  className="form-check-label dynamic-checkbox-label ml-2"
                  htmlFor={item}
                >
                  {item}
                </label>
              </div>
            );
          })}
          <p className="text-center mt-4">
            <small className="tip">Please select spoken languages</small>
          </p>
        </div>

        <InputGroup
          name="slogan"
          placeholder={"Slogan"}
          onChange={onChange}
          labels={sloganLabel}
          value={slogan}
          error={errors}
        />

        <SelectListGroup
          name="gender"
          value={gender}
          onChange={onChange}
          error={errors}
          options={genderList}
          labels={genderLabel}
        />

        <div className="form-group">
          <label htmlFor="Services" className="form-check-label">
            Services *
          </label>
          <br />
          {servicesList.map((service, index) => {
            return (
              <div
                className="form-check form-check-inline dynamic-checkbox"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={service}
                  name="services"
                  onChange={e => onCheckBoxServ(e, service)}
                  checked={getCheckStatus(service, "services")}
                />
                <label
                  className="form-check-label dynamic-checkbox-label ml-2"
                  htmlFor={service}
                >
                  {service}
                </label>
              </div>
            );
          })}
        </div>

        <SelectListGroup
          name="category"
          value={category}
          onChange={onChange}
          error={errors}
          options={categoryList}
          labels={categoryLabel}
        />
        <SelectListGroup
          name="sexual_orientation"
          value={sexual_orientation}
          onChange={onChange}
          error={errors}
          options={sexual_orientationList}
          labels={sexualOrientationLabel}
        />
        <InputGroup
          name="age"
          placeholder={"18"}
          onChange={onChange}
          labels={ageLabel}
          value={age}
          error={errors}
        />
        <SelectListGroup
          name="silhouette"
          value={silhouette}
          onChange={onChange}
          error={errors}
          options={silhouetteList}
          labels={silhouetteLabel}
        />
        <SelectListGroup
          name="origin"
          value={origin}
          onChange={onChange}
          error={errors}
          options={originList}
          labels={originLabel}
        />

        <TextAreaGroup
          placeholder="Short Bio "
          name="description"
          value={description}
          onChange={onChange}
          // error={error}
          info="Tell us a little about yourself"
          labels={descriptionLabel}
        />
        <InputGroup
          name="address"
          placeholder="Building 36, Rue de Montchoisy, Eaux-Vives, Geneva, 1027, Switzerland"
          onChange={onChange}
          labels={addressLabel}
          value={address}
        />

        <TextAreaGroup
          placeholder="21:00 - 05:00"
          name="hours"
          value={hours}
          onChange={onChange}
          // error={error}
          labels={businesshoursLabel}
        />

        <TextAreaGroup
          placeholder="200CHF"
          name="rate"
          value={rate}
          onChange={onChange}
          // error={error}
          labels={rateLabel}
        />
        <InputGroup
          name="phone"
          placeholder={"+41 79 000 00 00"}
          onChange={onChange}
          labels={phonenumberLabel}
          value={phone}
          error={errors}
        />
        <InputGroup
          name="website"
          placeholder={"https://www.site.com"}
          onChange={onChange}
          labels={websiteLabel}
          value={website}
          error={errors}
        />
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block main-theme-btn"
        >
          Edit Profile
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  createProfile
})(withRouter(EditAdForm));
