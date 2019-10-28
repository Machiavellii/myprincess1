import React, { useState } from 'react';
import '../../../styles/PostAnAdForm.css';

import { connect } from 'react-redux';

import {
  spokenLanguageList,
  categoryList,
  servicesList,
  silhouetteList,
  originList,
  cantonsList,
  cityList,
  genderList,
  sexual_orientationList,
  typeList
} from '../../../constants/data.json';

const EditAdForm = ({
  profile: { profile, loading },
  auth: isAuthenticated
}) => {
  return (
    <form className="container mb-5">
      <div className="form-group col-md-12">
        <p>Job Activity</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="is_active"
            id="active"
            value={true}
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
          />
          <label className="form-check-label" htmlFor="inactive">
            inactive
          </label>
        </div>
        <p className="text-center">
          <small className="tip">Please select if your profile is active</small>
        </p>
      </div>

      <div className="form-group col-md-12 mb-4">
        <label htmlFor="nickname">
          That nickname will be displayed is your profile *
        </label>
        <input
          type="text"
          className="form-control"
          id="nickname"
          placeholder="Nickname"
          required
        />
      </div>

      <div className="form-group col-md-12 mt-3">
        <label htmlFor="type">Type</label>
        <select className="form-control" id="type" name="type">
          {typeList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
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
                id="item"
                value={item}
                name="languages"
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

      <div className="form-group col-md-12 mb-3">
        <label htmlFor="slogan">Slogan</label>
        <input
          type="text"
          className="form-control"
          id="slogan"
          placeholder="Slogan"
          name="slogan"
        />
      </div>

      <div className="form-group col-md-12 mt-4">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" name="gender">
          {genderList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
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

      <div className="form-group col-md-12 mt-3">
        <label htmlFor="category">Category</label>
        <select className="form-control" id="category" name="category">
          {categoryList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12 mt-3">
        <label htmlFor="sexual_orientation">Sexual_orientation</label>
        <select
          className="form-control"
          id="sexual_orientation"
          name="sexual_orientation"
        >
          {sexual_orientationList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="age">Age *</label>
        <input
          type="text"
          className="form-control"
          id="age"
          placeholder="18"
          name="age"
        />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="silhoue">Silhouette *</label>
        <select className="form-control" id="silhoue" name="silhouette">
          {silhouetteList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="origin">Origin *</label>
        <select
          className="form-control"
          id="origin"
          value={origin}
          name="origin"
        >
          {originList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="description">Description *</label>
        <textarea
          className="form-control"
          rows="3"
          name="description"
        ></textarea>
      </div>

      <div className="form-group col-md-12 mt-3">
        <label htmlFor="canton">Canton</label>
        <select className="form-control" name="canton">
          {cantonsList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12 mt-3">
        <label htmlFor="city">City</label>
        <select className="form-control" id="city" name="city">
          {cityList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="zip">City Zip</label>
        <input
          type="text"
          className="form-control"
          id="zip"
          placeholder="8000"
          name="zip"
        />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="coverPicture">Cover picture</label>
        <input
          type="file"
          className="form-control-file"
          id="coverPicture"
          name="cover_photo"
        />
        <p className="text-center">
          <small className="tip">Add a cover photo</small>
        </p>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="gallery">Upload your photographs (max. 10)</label>
        <input
          type="file"
          className="form-control-file"
          id="gallery"
          name="photos"
          multiple
        />
        <p className="text-center">
          <small className="tip">
            The first picture will be displayed as the hand.
          </small>
        </p>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="businessHours">Business hours</label>
        <textarea
          className="form-control"
          id="businessHours"
          rows="3"
          placeholder="21:00-05:00"
          name="hours"
        ></textarea>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="minimumRate">Minmum Rate</label>
        <textarea
          className="form-control"
          id="minimumRate"
          rows="3"
          placeholder="200CHF"
          name="rate"
        ></textarea>
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="+41 79 000 00 00"
          name="phone"
        />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="website">Personal Website</label>
        <input
          type="text"
          className="form-control"
          id="website"
          name="website"
          placeholder="https://www.site.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block main-theme-btn"
      >
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps)(EditAdForm);
